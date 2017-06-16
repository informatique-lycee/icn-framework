var activeJavascript;

var examples = {
    // script in action
    "activeScript": void(0),
    // HTML parts of the scripts
    "htmlData": "",
    "preHtmlData": "",
    "postHtmlData": "",
    // CSS parts of the scripts
    "cssData": "",
    "preCssData": "",
    // Javascripts part of the scripts
    "javascriptData": "",
    "preJavascriptData": "",
    "postJavascriptData": "",
    // activeEditor
    "activeEditor": void(0),
    "doDebug": false,


    debug: function(e) {
        if (examples.doDebug) {
            console.log(e);
        }
    },

    init: function(myInfos, script_id) {

        examples.debug('parametres :' + myInfos);
        examples.loaded = [];

        //reset event handlers to a cleaner state
        $('#runButton').unbind('click');
        $('#resetButton').unbind('click');
        $('#JavascriptModal').unbind('shown.bs.modal');

        // Création des trois éditeurs

        examples.htmlEditor = ace.edit('htmlEditor');
        examples.htmlEditor.$blockScrolling = Infinity;
        examples.htmlEditor.setTheme('ace/theme/kuroir');
        examples.htmlEditor.getSession().setMode('ace/mode/html');
        examples.htmlEditor.getSession().setTabSize(2);
        examples.htmlEditor.setShowPrintMargin(false);
        examples.htmlEditor.setHighlightActiveLine(true);
        examples.htmlEditor.renderer.setShowGutter(true);

        examples.cssEditor = ace.edit('cssEditor');
        examples.cssEditor.$blockScrolling = Infinity;
        examples.cssEditor.setTheme('ace/theme/twilight');
        examples.cssEditor.getSession().setMode('ace/mode/css');
        examples.cssEditor.getSession().setTabSize(2);
        examples.cssEditor.setShowPrintMargin(false);
        examples.cssEditor.setHighlightActiveLine(true);
        examples.cssEditor.renderer.setShowGutter(true);

        examples.javascriptEditor = ace.edit('javascriptEditor');
        examples.javascriptEditor.$blockScrolling = Infinity;
        examples.javascriptEditor.setTheme('ace/theme/monokai');
        examples.javascriptEditor.getSession().setMode('ace/mode/javascript');
        examples.javascriptEditor.getSession().setTabSize(2);
        examples.javascriptEditor.setShowPrintMargin(false);
        examples.javascriptEditor.setHighlightActiveLine(true);
        examples.javascriptEditor.renderer.setShowGutter(true);

        examples.dims = [];

        // Focus on editor when changing tab

        $('#htmlTab').on('shown.bs.tab', function(e) {
            examples.htmlEditor.focus();
            examples.activeEditor = 'html';
        });
        $('#cssTab').on('shown.bs.tab', function(e) {
            examples.cssEditor.focus();
            examples.activeEditor = 'css';
        });
        $('#javascriptTab').on('shown.bs.tab', function(e) {
            examples.javascriptEditor.focus();
            examples.activeEditor = 'javascript';
        });

        // Button

        $('#runButton').click(function() {
            examples.debug('tying runButton to function');
            examples.runExample();
        });
        $('#resetButton').click(function() {
            examples.resetExample();
        });

        // Load editors content : main files
        $.ajax({
                url: myInfos.htmlFile,
                dataType: 'text',
                async: true
            })
            .done(function(data) {
                examples.htmlData = data;
                examples.htmlEditor.getSession().setValue(examples.htmlData);
                examples.loaded.push('html');
                $(document).trigger('exampleFileLoaded');
            });

        $.ajax({
                url: myInfos.cssFile,
                dataType: 'text',
                async: true
            })
            .done(function(data) {
                examples.cssData = data;
                examples.cssEditor.getSession().setValue(examples.cssData);
                examples.loaded.push('css');
                $(document).trigger('exampleFileLoaded');
            });

        $.ajax({
                url: myInfos.javascriptFile,
                dataType: 'text',
                async: true
            })
            .done(function(data) {
                examples.javascriptData = data;
                examples.javascriptEditor.getSession().setValue(examples.javascriptData);
                examples.loaded.push('javascript');
                $(document).trigger('exampleFileLoaded');
            });


        // load pre files
        if (typeof(myInfos.preHtmlFile) != 'undefined') {
            $.ajax({
                    url: myInfos.preHtmlFile,
                    dataType: 'text',
                    async: true
                })
                .done(function(data) {
                    examples.preHtmlData = data;
                    examples.loaded.push('preHtml');
                    $(document).trigger('exampleFileLoaded');
                });
        } else {
            examples.loaded.push('preHtml');
            $(document).trigger('exampleFileLoaded');
        }

        if (typeof(myInfos.preCssFile) != 'undefined') {
            $.ajax({
                    url: myInfos.preCssFile,
                    dataType: 'text',
                    async: true
                })
                .done(function(data) {
                    examples.preCssData = data;
                    examples.loaded.push('preCss');
                    $(document).trigger('exampleFileLoaded');
                });
        } else {
            examples.loaded.push('preCss');
            $(document).trigger('exampleFileLoaded');
        }

        if (typeof(myInfos.preJavascriptFile) != 'undefined') {
            $.ajax({
                    url: myInfos.preJavascriptFile,
                    dataType: 'text',
                    async: true
                })
                .done(function(data) {
                    examples.preJavascriptData = data;
                    examples.loaded.push('preJavascript');
                    $(document).trigger('exampleFileLoaded');
                });
        } else {
            examples.loaded.push('preJavascript');
            $(document).trigger('exampleFileLoaded');
        }

        // load post files
        if (typeof(myInfos.postHtmlFile) != 'undefined') {
            $.ajax({
                    url: myInfos.postHtmlFile,
                    dataType: 'text',
                    async: true
                })
                .done(function(data) {
                    examples.postHtmlData = data;
                    examples.loaded.push('postHtml');
                    $(document).trigger('exampleFileLoaded');
                });
        } else {
            examples.loaded.push('postHtml');
            $(document).trigger('exampleFileLoaded');
        }

        if (typeof(myInfos.postJavascriptFile) != 'undefined') {
            $.ajax({
                    url: myInfos.postJavascriptFile,
                    dataType: 'text',
                    async: true
                })
                .done(function(data) {
                    examples.postJavascriptData = data;
                    examples.loaded.push('postJavascript');
                    $(document).trigger('exampleFileLoaded');
                });
        } else {
            examples.loaded.push('postJavascript');
            $(document).trigger('exampleFileLoaded');
        }


        // hide unnecessary editors

        if (typeof(myInfos.hasHtmlEditor) != 'undefined') {
            if (!myInfos.hasHtmlEditor) {
                //hide tab
                $('#htmlTab').hide();
            }
        }
        if (typeof(myInfos.hasCssEditor) != 'undefined') {
            if (!myInfos.hasCssEditor) {
                $('#cssTab').hide();
            }
        }
        if (typeof(myInfos.hasJavascriptEditor) != 'undefined') {
            if (!myInfos.hasJavascriptEditor) {
                //hide tab
                $('#javascriptTab').hide();
            }
        }

        // fix active editor. Default is Javascript
        examples.debug('script actif : ' + examples.activeScript + ' script chargé : ' + script_id);
        if (script_id != examples.activeScript) {
            examples.activeEditor = void(0);
            examples.activeScript = script_id;
        }
        examples.debug('entering shown.modal ...');
        examples.debug('editor : ' + examples.activeEditor + ' wanted : ' + myInfos.activeEditor);
        if (typeof(examples.activeEditor) == 'undefined') {
            if (typeof(myInfos.activeEditor) != 'undefined') {
                examples.setActiveEditor(myInfos.activeEditor);
            } else {
                examples.setActiveEditor('javascript');
            }
        }

        examples.setActiveEditor(examples.activeEditor);

    },


    resetExample: function() {
        examples.debug('entering resetExample function ...');
        // there is a bug in ACE. You can only update editor if
        // it is not hidden...
        var current_editor = examples.activeEditor;

        examples.setActiveEditor('html');
        examples.htmlEditor.getSession().setValue(examples.htmlData);
        examples.htmlEditor.renderer.updateFull(true);

        examples.setActiveEditor('css');
        examples.cssEditor.getSession().setValue(examples.cssData);
        examples.cssEditor.renderer.updateFull(true);

        examples.setActiveEditor('javascript');
        examples.javascriptEditor.getSession().setValue(examples.javascriptData);
        examples.javascriptEditor.renderer.updateFull(true);

        examples.setActiveEditor(current_editor);

        examples.runExample();
    },

    setActiveEditor: function(e) {
        $('#' + e + 'Tab').tab('show');
        if (e == "html") {
            examples.htmlEditor.focus();
        } else if (e == 'css') {
            examples.cssEditor.focus();
        } else if (e == 'javascript') {
            examples.javascriptEditor.focus();
        }
    },

    // load script into iframe
    runExample: function() {
        examples.debug('entering runExample ...');

        // Empty Frame
        /*  $('#exampleFrame').attr('src','index.php?page=empty'); */
        /*document.getElementById('exampleFrame').contentWindow.location.reload(true);*/

        // Create new frame. May be not totally correct because CSS and javascript
        // can be after closing html tag but browsers can cope with that
        var myFrame = $('#exampleFrame')[0].contentWindow.document;
        myFrame.open();
        myFrame.write("<!DOCTYPE html><html><head></head><body></body></html>");
        myFrame.close();
        document.getElementById('exampleFrame').contentWindow.location.reload(true);

        window.setTimeout(function(){
            myFrame = $('#exampleFrame')[0].contentWindow.document;
            examples.debug(examples.getPage());
            myFrame.open();
            myFrame.write(examples.getPage())
            myFrame.close();
        },400);
    },

    getPage: function() {
        var page = examples.preHtmlData + "\r\n" + examples.htmlEditor.getSession().getValue() + "\r\n";
        page += "<style>" + examples.preCssData + "\r\n" + examples.cssEditor.getSession().getValue() + "</style>";
        page += '<script type=text/javascript>';
        page += examples.preJavascriptData + "\r\n";
        page += examples.javascriptEditor.getSession().getValue();
        page += "\r\n" + examples.postJavascriptData;
        page += '</script>';
        page += examples.postHtmlData;
        return page;
    }

}

$(document).on('exampleFileLoaded', function() {
    var isLoaded = false;
    isLoaded = (examples.loaded.indexOf('html') >= 0);
    if (isLoaded) {
        examples.debug('html loaded');
    }
    isLoaded = isLoaded && (examples.loaded.indexOf('css') >= 0);
    if (isLoaded) {
        examples.debug('html and css loaded');
    }
    isLoaded = isLoaded && (examples.loaded.indexOf('javascript') >= 0);
    if (isLoaded) {
        examples.debug('html, css, javascript loaded');
    }
    isLoaded = isLoaded && (examples.loaded.indexOf('preHtml') >= 0);
    if (isLoaded) {
        examples.debug('html, css, javascript, preHtml loaded');
    }
    isLoaded = isLoaded && (examples.loaded.indexOf('preCss') >= 0);
    if (isLoaded) {
        examples.debug('html, css, javascript , preHtml et preCSS loaded');
    }
    isLoaded = isLoaded && (examples.loaded.indexOf('preJavascript') >= 0);
    if (isLoaded) {
        examples.debug('html, css, javascript preHtml, preCSS et javascript loaded');
    }
    isLoaded = isLoaded && (examples.loaded.indexOf('postHtml') >= 0);
    if (isLoaded) {
        examples.debug(' tout sauf post Javascript loaded');
    }
    isLoaded = isLoaded && (examples.loaded.indexOf('postJavascript') >= 0);
    if (isLoaded) {
        examples.debug('tout loaded ! go ! ');
    }
    if (isLoaded) {
        examples.runExample();
    }
});
