var CustomDatePicker = {
    simpleDate(fieldId, attributes, callback){
        var datePicker = $( "#" + fieldId )
        .datepicker(attributes)
        .on( "change", function(){
            callback(this)
        });
miui

        return datePicker;
    },
    rangueDate(startFieldId, endFieldId, attributes = null, startCallback = null, endCallback = null){
        var dateStart = this.simpleDate("dateStart", attributes, dateStartCallback)
        var dateEnd = this.simpleDate("dateEnd", attributes, dateEndCallback)
    
        function dateStartCallback (dataPicker) {
            dateEnd.datepicker( "option", "minDate", getDate( dataPicker ) );
            if(startCallback != null ){
                startCallback
            }
        }
    
        function dateEndCallback (dataPicker) {
            dateStart.datepicker( "option", "maxDate", getDate( dataPicker ) );
            if(endCallback != null ){
                endCallback
            }
        }
    
        function getDate( element ) {
            var date;
            var dFormat = attributes == null ? "yy-mm-dd" : (attributes.dateFormat == null ? "yy-mm-dd" : attributes.dateFormat)
            try {
                date = $.datepicker.parseDate( dFormat, element.value );
            } catch( error ) {
                console.log('error', error)
                date = null;
            }
            return date;
        }
    
        dateStart.trigger('change')
        dateEnd.trigger('change')
    }
}