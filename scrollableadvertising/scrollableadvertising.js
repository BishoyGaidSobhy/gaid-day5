var popupWindow=null;

function popup()
{
    popupWindow = window.open('child_page.html','name','width=200,height=200');
}

function parent_disable() {
if(popupWindow && !popupWindow.closed)
popupWindow.focus();
}