/*
 *  Project: ICN Framework
 *  Description: Plugin jQuery pour les exercices
 *  Auteur: Laurent COOPER
 *  License: GPL v3
 */

;(function ( $, window, undefined ) {

    var pluginName = 'icnExercices',
        document = window.document,
        defaults = {
            htmlEditorId:'htmlEditor',
            cssEditorId:'cssEditor',
            javascriptEditorId:'javascriptEditor',
            htmlTheme:'kuroir',
            cssTheme:'twilight',
            javascriptTheme:'monokai',
            files:{
              preHtml:'',
              preCss:'',
              preJavascript:'',
              html:'',
              css:'',
              javascript:'',
              postHtml:'',
              postJavascript:''
            },
            editors:{
              html:false,
              css:false,
              javascript:false
            }
        };

    // The actual plugin constructor
    function Plugin( element, options ) {
        this.element = element;
        this._defaults = defaults;
        this._name = pluginName;
        /* Variables locales au plugin */
        // script in action
        this.activeScript= void(0);
        // HTML parts of the scripts
        this.datas={
            html: "",
            preHtml: "",
            postHtml: "",
            // CSS parts of the scripts
            css: "",
            preCss: "",
            // Javascripts part of the scripts
            javascript: "",
            preJavascript: "",
            postJavascript: ""
        };
        // activeEditor
        this.activeEditor= void(0),
        this.doDebug=true,

        this.init(options);
    }

    Plugin.prototype.init = function(options) {
        this.options = $.extend( {}, defaults, options) ;
        /* Creation des 3 éditeurs de texte */
        this.htmlEditor = ace.edit(this.options.htmlEditorId);
        this.htmlEditor.$blockScrolling = Infinity;
        this.htmlEditor.setTheme('ace/theme/'+this.options.htmlTheme);
        this.htmlEditor.getSession().setMode('ace/mode/html');
        this.htmlEditor.getSession().setTabSize(2);
        this.htmlEditor.setShowPrintMargin(false);
        this.htmlEditor.setHighlightActiveLine(true);
        this.htmlEditor.renderer.setShowGutter(true);

        this.cssEditor = ace.edit(this.options.cssEditorId);
        this.cssEditor.$blockScrolling = Infinity;
        this.cssEditor.setTheme('ace/theme/'+this.options.cssTheme);
        this.cssEditor.getSession().setMode('ace/mode/css');
        this.cssEditor.getSession().setTabSize(2);
        this.cssEditor.setShowPrintMargin(false);
        this.cssEditor.setHighlightActiveLine(true);
        this.cssEditor.renderer.setShowGutter(true);

        this.javascriptEditor = ace.edit(this.options.javascriptEditorId);
        this.javascriptEditor.$blockScrolling = Infinity;
        this.javascriptEditor.setTheme('ace/theme/'+this.options.javascriptTheme);
        this.javascriptEditor.getSession().setMode('ace/mode/javascript');
        this.javascriptEditor.getSession().setTabSize(2);
        this.javascriptEditor.setShowPrintMargin(false);
        this.javascriptEditor.setHighlightActiveLine(true);
        this.javascriptEditor.renderer.setShowGutter(true);

        this.debug("fabrication des editeurs terminé")

        /* Fichiers par defaut */
        /* HTML */
        if (this.options.files.preHtml===undefined || this.preHtml==='') {
            this.options.files.preHtml='ressources/common/assets/examples/html/empty.html';
        }
        if (this.options.files.html===undefined || this.html==='') {
            this.options.files.html='ressources/common/assets/examples/html/empty.html';
        }
        if (this.options.files.postHtml===undefined || this.postHtml==='') {
            this.options.files.postHtml='ressources/common/assets/examples/html/empty.html';
        }
        /* CSS */
        if (this.options.files.preCss===undefined || this.preCss==='') {
            this.options.files.preCss='ressources/common/assets/examples/css/empty.css';
        }
        if (this.options.files.css===undefined || this.css==='') {
            this.options.files.css='ressources/common/assets/examples/css/empty.css';
        }
        /* Javascript */
        if (this.options.files.preJavascript===undefined || this.preJavascript==='') {
            this.options.files.preJavascript='ressources/common/assets/examples/javascript/empty.js';
        }
        if (this.options.files.javascript===undefined || this.javascript==='') {
            this.options.files.javascript='ressources/common/assets/examples/javascript/empty.js';
        }
        if (this.options.files.postJavascript===undefined || this.postJavascript==='') {
            this.options.files.postJavascript='ressources/common/assets/examples/javascript/empty.js';
        }

        this.debug("Fichiers utilisés:");
        this.debug(this.options.files);

        /* Focus sur l'éditeur en cas de changement de tab */
        $('#htmlTab')
            .on('shown.bs.tab',function(e) {
                this.htmlEditor.focus();
                this.activeEditor = 'html';
            }.bind(this));

        $('#cssTab')
            .on('shown.bs.tab', function(e) {
                this.cssEditor.focus();
                this.activeEditor = 'css';
            }.bind(this));

        $('#javascriptTab')
            .on('shown.bs.tab',function(e) {
                this.javascriptEditor.focus();
                this.activeEditor = 'javascript';
            }.bind(this));


        /* Activation des  Boutons */

            /* Sanity unbind ... */
        $('#zipButton').off('click.'+pluginName);
        $('#saveButton').off('click.'+pluginName);
        $('#restoreButton').off('click.'+pluginName);
        $('#runButton').off('click.'+pluginName);
        $('#resetButton').off('click.'+pluginName);

        /* bind */

        $('#saveButton').on('click.' + pluginName, function() {
          this.saveFiles();
          $('#restoreButton').removeClass('disabled');
        }.bind(this));

        $('#restoreButton').on('click.' + pluginName, function() {
          this.restoreFiles();
        }.bind(this));

        $('#runButton').on('click.' + pluginName, function() {
          this.runExample();
        }.bind(this));

        $('#resetButton').on('click.'+pluginName,function() {
          this.resetExample();
        }.bind(this));

        $('#zipButton').on('click.'+pluginName,function() {
          this.downloadZip();
        }.bind(this));

        this.loadFiles();
        this.showEditors();

        // fix active editor. Default is Javascript
        this.debug('script actif : ' + this.activeScript + ' script chargé : ' + this.options.script_id);
        if (this.options.script_id != this.activeScript) {
            this.activeEditor = void(0);
            this.activeScript = this.options.script_id;
        }
        this.debug('entering shown.modal ...');
        this.debug('editor : ' + this.activeEditor + ' wanted : ' + this.activeEditor);
        if (typeof(this.activeEditor) == 'undefined') {
            if (typeof(this.activeEditor) != 'undefined') {
                this.setActiveEditor(this.activeEditor);
            } else {
                this.setActiveEditor('javascript');
            }
        }

        this.setActiveEditor(this.activeEditor);
    };

    Plugin.prototype.loadFiles = function() {
        /* Tout les fichiers ont une valeur par defaut correcte */
        $.get(this.options.files.preHtml)
            .then(function(data){
                this.datas.preHtml=data;
                return($.ajax({url:this.options.files.html,dataType:"text"}))
            }.bind(this))
            .then(function(data){
                this.datas.html=data;
                this.htmlEditor.getSession().setValue(this.datas.html);
                return($.ajax({url:this.options.files.postHtml,dataType:"text"}))
            }.bind(this))
            .then(function(data){
                this.postHhtmlData=data;
                return($.ajax({url:this.options.files.preCss,dataType:"text"}))
            }.bind(this))
            .then(function(data){
                this.datas.preCss=data;
                return($.ajax({url:this.options.files.css,dataType:"text"}))
            }.bind(this))
            .then(function(data){
                this.datas.css=data;
                this.cssEditor.getSession().setValue(this.datas.css);
                return($.ajax({url:this.options.files.preJavascript,dataType:"text"}))
            }.bind(this))
            .then(function(data){
                this.datas.preJavascript=data;
                return($.ajax({url:this.options.files.javascript,dataType:"text"}))
            }.bind(this))
            .then(function(data){
                this.datas.javascript=data;
                this.javascriptEditor.getSession().setValue(this.datas.javascript);
                return($.ajax({url:this.options.files.postJavascript,dataType:"text"}))
            }.bind(this))
            .then(function(data){
                this.datas.postJavascript=data;
                this.runExample();
            }.bind(this));
    }

    Plugin.prototype.showEditors = function() {
        // hide unnecessary editors

        if (!this.options.editors.html) $('#htmlTab').hide();
        if (!this.options.editors.css) $('#cssTab').hide();
        if (!this.options.editors.javascript) $('#javascriptTab').hide();

    }

    Plugin.prototype.setActiveEditor = function(e) {
        this.debug("editeur à afficher : "+e);
        this.debug('objet DOM : #' + e + 'Tab');
        this.debug($('#' + e + 'Tab').tab);

        $('#' + e + 'Tab').tab('show');

        this.debug("editeur affiché ?");

        if (e == "html") {
            this.htmlEditor.focus();
        } else if (e == 'css') {
            this.cssEditor.focus();
        } else if (e == 'javascript') {
            this.javascriptEditor.focus();
        }
        this.debug("focus sur l'éditeur e");
    };

    Plugin.prototype.resetExample = function() {
        this.debug('entering resetExample function ...');
        // there is a bug in ACE. You can only update editor if
        // it is not hidden...
        var current_editor = this.activeEditor;

        this.setActiveEditor('html');
        this.htmlEditor.getSession().setValue(this.datas.html);
        this.htmlEditor.renderer.updateFull(true);

        this.setActiveEditor('css');
        this.cssEditor.getSession().setValue(this.datas.css);
        this.cssEditor.renderer.updateFull(true);

        this.setActiveEditor('javascript');
        this.javascriptEditor.getSession().setValue(this.datas.javascript);
        this.javascriptEditor.renderer.updateFull(true);

        this.setActiveEditor(current_editor);

    };

    Plugin.prototype.runExample = function() {
        this.debug('entering runExample ...');

        // Create new frame. May be not totally correct because CSS and javascript
        // can be after closing html tag but browsers can cope with that
        var myFrame = $('#exampleFrame')[0].contentWindow.document;
        document.getElementById('exampleFrame').contentWindow.location.reload(true);

        window.setTimeout(function(){
            myFrame = $('#exampleFrame')[0].contentWindow.document;
            this.debug(this.getPage());
            myFrame.open();
            myFrame.write(this.getPage())
            myFrame.close();
        }.bind(this),400);
    };

    Plugin.prototype.getPage = function() {
        var page =this.datas.preHtml + "\r\n" + this.htmlEditor.getSession().getValue() + "\r\n";
        page += "<style>" + this.datas.preCss + "\r\n" + this.cssEditor.getSession().getValue() + "</style>";
        page += '<script type=text/javascript>';
        page += this.datas.preJavascript + "\r\n";
        page += this.javascriptEditor.getSession().getValue();
        page += "\r\n" + this.datas.postJavascript;
        page += '</script>';
        page += this.datas.postHtml;
        return (page);
    };

    Plugin.prototype.downloadZip = function() {
        var zip=new JSZip();
        /* Création du contenu */
        var htmlContent= this.datas.preHtml + "\r\n";
        htmlContent +=  this.htmlEditor.getSession().getValue()+ "\r\n";
        htmlContent += this.datas.postHtml;
        var cssContent= this.datas.preCss + "\r\n";
        cssContent +=  this.cssEditor.getSession().getValue()+ "\r\n";
        var javascriptContent= this.datas.preJavascript + "\r\n";
        javascriptContent +=  this.javascriptEditor.getSession().getValue()+ "\r\n";
        javascriptContent += this.datas.postJavascript;
        /* Création des fichiers du zip */
        zip.file("index.html",htmlContent)
            .file("style.css",cssContent)
            .file("script.js",javascriptContent);
        zip.generateAsync({type:"blob"})
            .then(function (blob) {
                saveAs(blob, "icn.zip");
            });
    };

    Plugin.prototype.saveFiles = function() {
        this.datas.html=this.htmlEditor.getSession().getValue();
        this.datas.css=this.cssEditor.getSession().getValue();
        this.datas.javascript=this.javascriptEditor.getSession().getValue();
        sessionStorage.setItem("icnFiles",JSON.stringify(this.datas));
    }

    Plugin.prototype.restoreFiles = function() {
        this.datas=JSON.parse(sessionStorage.getItem("icnFiles"));
        this.resetExample();
    }

    /* log dans la console pour le debug */
    Plugin.prototype.debug = function(e) {
        if (this.doDebug) {
            console.log(e);
        }
    };

    $.fn[pluginName] = function ( options ) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName, new Plugin( this, options ));

            }
        });
    };

}(jQuery, window));

var activeJavascript;
