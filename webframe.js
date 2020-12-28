const {webFrame} =require('electron')

function zoomIn()
{
webFrame.setZoomLevel(2)
}
function zoomOut()
{
webFrame.setZoomLevel(0)
}  