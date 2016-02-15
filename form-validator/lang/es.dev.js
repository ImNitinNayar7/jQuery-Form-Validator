/**
 * jQuery Form Validator
 * ------------------------------------------
 *
 * Spanish language package
 *
 * @website http://formvalidator.net/
 * @license MIT
 * @version 2.2.157
 */
(function($, window) {

  'use strict';

  $(window).bind('validatorsLoaded', function() {

    $.formUtils.LANG = {
      errorTitle: 'El formulario no se ha podido enviar!',
      requiredField: 'Este campo es obligatorio',
      requiredFields: 'No ha contestado todos los campos requeridos',
      badTime: 'La hora proporcionada no es válida',
      badEmail: 'La dirección de e-mail no es válida',
      badTelephone: 'El número de teléfono proporcionado no es válido',
      badSecurityAnswer: 'La respuesta a su pregunta de seguridad es incorrecta',
      badDate: 'La fecha proporcionada no es válida',
      lengthBadStart: 'Su respuesta debe incluir entre ',
      lengthBadEnd: ' caracteres',
      lengthTooLongStart: 'Su respuesta debe de ser menor a ',
      lengthTooShortStart: 'Su respuesta debe de ser mayor a ',
      notConfirmed: 'Los valores proporcionados no pudieron ser confirmados',
      badDomain: 'Ha introducido un dominio incorrecto',
      badUrl: 'La URL proporcionada no es válida',
      badCustomVal: 'Los valores proporcionados no son válidos',
      andSpaces: ' y espacios ',
      badInt: 'El valor proporcionado no es un número válido',
      badSecurityNumber: 'El número de seguridad social proporcionado es incorrecto',
      badUKVatAnswer: 'No número VAT proporcionado no es válido para el Reino Unido',
      badStrength: 'La contraseña proporcionada no es lo suficientemente segura',
      badNumberOfSelectedOptionsStart: 'Debe seleccionar al menos',
      badNumberOfSelectedOptionsEnd: ' respuesta(s)',
      badAlphaNumeric: 'El valor proporcionado solo debe contener caracteres alfanuméricos (a-z y números)',
      badAlphaNumericExtra: ' y',
      wrongFileSize: 'El archivo que está tratando de subir es demasiado grande (máx. %s)',
      wrongFileType: 'Sólo los archivos del tipo %s están permitido',
      groupCheckedRangeStart: 'Por favor, elija entre ',
      groupCheckedTooFewStart: 'Por favor, elija al menos ',
      groupCheckedTooManyStart: 'Por favor, elija un máximo de ',
      groupCheckedEnd: ' ítem(s)',
      badCreditCard: 'El número de tarjeta de crédito proporcionado no es válido',
      badCVV: 'CVV proporcionado no es válido',
      wrongFileDim: 'Las dimensiones de la imagen no son validas,',
      imageTooTall: 'el alto de la imagen no puede ser mayor a',
      imageTooWide: 'el ancho de la imagen no puede ser mayor a',
      imageTooSmall: 'la imagen es demasiado pequeña',
      min: 'min.',
      max: 'máx.',
      imageRatioNotAccepted : 'La proporción de imagen (alto x ancho) no es válida'
    };

  });

})(jQuery, window);
