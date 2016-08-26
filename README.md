leaflet-tracksymbol-label
=============

Based on  [Leaflet.label](https://github.com/Leaflet/Leaflet.label)

leaflet-tracksymbol-label is plugin for adding labels to [Leaflet Tracksymbol](https://github.com/lethexa/leaflet-tracksymbol) 

##Usage examples

If you want to just bind a label to marker that will show when the mouse is over it, it's really easy:

````js
var track = L.trackSymbol(options).bindTracksymbolLabel();
track.updateTracksymbolLabelContent("Conent");
````

It is only Displayed when the String has content. If there is no content nothing will be displayed.

````js
track.updateTracksymbolLabelContent();
````
