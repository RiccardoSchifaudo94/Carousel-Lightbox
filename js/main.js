$(document).ready(function(){
        //ISTANZIO LO SLIDER
        var slider = new Slider();
            //CREO DUE SLIDER CON SCOPE TAG HTML SU CUI GENERARLO E STRUTTURA DATI DEFINITA IN PLUGIN.JS
            slider.create($(".prova"),array_items);
            slider.create($(".prova2"),array_items);
            //INIZIALIZZO LE GLI STLIDERE CHE HO DEFINITO
            slider.init(); 
});
