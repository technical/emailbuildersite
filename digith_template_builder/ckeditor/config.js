/**
 * @license Copyright (c) 2003-2014, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.html or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here.
	// For the complete reference:
	// http://docs.ckeditor.com/#!/api/CKEDITOR.config

	// The toolbar groups arrangement, optimized for two toolbar rows.
	config.toolbarGroups = [
		{ name: 'clipboard',   groups: [ 'undo' ] },
		{ name: 'editing',     groups: [ 'find', 'selection'] },//
		{ name: 'links' },
		{ name: 'insert' },//
		{ extraPlugins: 'sourcedialog'},
		'/',//
		//{ name: 'forms' },
		{ name: 'tools' },//
		{ name: 'document',	   groups: [ 'mode', 'document', 'doctools' ] },//
		//{ name: 'others' },
		{ name: 'basicstyles', groups: [ 'basicstyles' ] },//, 'cleanup'//
		{ name: 'paragraph',   groups: [ 'list', 'indent', 'blocks', 'align' ] },//, 'bidi'
		{ name: 'styles' },//
		//{ name: 'colors'},, 'bidi'
		//{ name: 'about' },
	];
	config.extraPlugins = 'sourcedialog';

	config.allowedContent = true;//
	config.title = false;

	// Remove some buttons, provided by the standard plugins, which we don't
	// need to have in the Standard(s) toolbar.
	//config.removeButtons = 'Underline,Subscript,Superscript';

	// Se the most common block elements.
	config.format_tags = 'p;h1;h2;h3;pre';
	
	CKEDITOR.on('dialogDefinition', function( ev ) {
  var dialogName = ev.data.name;
  var dialogDefinition = ev.data.definition;

  if(dialogName === 'table') {
    var infoTab = dialogDefinition.getContents('info');
    var cellSpacing = infoTab.get('txtCellSpace');
    cellSpacing['default'] = "0";
    var cellPadding = infoTab.get('txtCellPad');
    cellPadding['default'] = "0";
    var border = infoTab.get('txtBorder');
    border['default'] = "0";
  }
});

	 //Make dialogs simpler.
	//config.removeDialogTabs = 'image:advanced;link:advanced';
};
