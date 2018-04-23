# How to apply a certain layout to the required view


<p><strong>Starting with 14.2, please use the <a href="http://js.devexpress.com/Documentation/Tutorial/SPA_Framework/Set_a_Layout_for_a_View/?version=14_2#Set_a_Layout_for_a_View">Set a Layout for a View</a> example.<br /></strong><br />It is necessary to handle the <a href="http://js.devexpress.com/Documentation/ApiReference/Application_Framework/HtmlApplication/Events?version=13_2#resolveLayoutController"><u>HtmlApplication.resolveLayoutController</u></a> event and specify the required layout controller that must be used to provide a layout markup for the given view. All predefined layout controllers that are available for the current platform are contained in the <strong>availableLayoutControllers</strong> argument of the event handler. The main idea is to find the required controller in this collection and set it to the <strong>layoutController</strong> parameter in the <strong>resolveLayoutController</strong> event handler. In addition, please make sure that links to files that are related to the required layout are added to the <strong>index.html</strong> file.</p>
<p>This example demonstrates how to apply the Empty layout to the About view.<br /><br /></p>
<p>Starting with 14.1, it is necessary to set all available layout controllers via the <a href="http://js.devexpress.com/Documentation/ApiReference/Application_Framework/HtmlApplication/Configuration?version=14_1#layoutSet">HtmlApplication.layoutSet</a> options. For the layout controllers that should be set using the <strong>resolveLayoutController</strong> event handler, set the <strong>customResolveRequired</strong> option to <strong>true </strong>as with the Empty layout controller.<br /><br /></p>
<p><strong>See also:</strong><br /> <a href="http://api.jquery.com/jQuery.grep/"><u>jQuery.grep</u></a></p>

<br/>


