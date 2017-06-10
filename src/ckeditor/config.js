/**
 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
	 config.language = 'zh-cn';
	 //config.skin = 'v2';
	 config.removePlugins = 'elementspath';
	 config.resize_enabled = false;
	 config.toolbarGroups = [
	                 		{ name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
	                 		{ name: 'document', groups: [ 'document', 'mode', 'doctools' ] },
	                 		{ name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
	                 		{ name: 'forms', groups: [ 'forms' ] },
	                 		'/',
	                 		{ name: 'styles', groups: [ 'styles' ] },
	                 		{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
	                 		{ name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi', 'paragraph' ] },
	                 		{ name: 'links', groups: [ 'links' ] },
	                 		{ name: 'insert', groups: [ 'insert' ] },
	                 		{ name: 'colors', groups: [ 'colors' ] },
	                 		{ name: 'tools', groups: [ 'tools' ] },
	                 		{ name: 'others', groups: [ 'others' ] },
	                 		{ name: 'about', groups: [ 'about' ] }
	                 	];

	 config.removeButtons = 'Source,Save,NewPage,Print,Preview,Templates,Cut,Copy,Undo,Redo,Find,SelectAll,Scayt,Form,Checkbox,Radio,TextField,Textarea,Select,Button,ImageButton,HiddenField,TextColor,Maximize,ShowBlocks,BGColor,About,Image,Flash,Table,HorizontalRule,Smiley,SpecialChar,PageBreak,Iframe,Link,Unlink,Anchor,Language,BidiRtl,BidiLtr,CreateDiv,Blockquote,Indent,Outdent,Replace,PasteFromWord,PasteText,Paste,Styles,Format,Strike,RemoveFormat';
 };