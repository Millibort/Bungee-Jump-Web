gdjs.Scn_95GameCode = {};
gdjs.Scn_95GameCode.GDTest_95PatternObjects1= [];
gdjs.Scn_95GameCode.GDTest_95PatternObjects2= [];
gdjs.Scn_95GameCode.GDTest_95PatternObjects3= [];
gdjs.Scn_95GameCode.GDTest_95Castle_950Objects1= [];
gdjs.Scn_95GameCode.GDTest_95Castle_950Objects2= [];
gdjs.Scn_95GameCode.GDTest_95Castle_950Objects3= [];
gdjs.Scn_95GameCode.GDTest_95TextObjects1= [];
gdjs.Scn_95GameCode.GDTest_95TextObjects2= [];
gdjs.Scn_95GameCode.GDTest_95TextObjects3= [];

gdjs.Scn_95GameCode.conditionTrue_0 = {val:false};
gdjs.Scn_95GameCode.condition0IsTrue_0 = {val:false};
gdjs.Scn_95GameCode.condition1IsTrue_0 = {val:false};


gdjs.Scn_95GameCode.eventsList0 = function(runtimeScene) {

{


gdjs.Scn_95GameCode.condition0IsTrue_0.val = false;
{
gdjs.Scn_95GameCode.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
}if (gdjs.Scn_95GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Test_Text"), gdjs.Scn_95GameCode.GDTest_95TextObjects2);
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(3), true);
}{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}{for(var i = 0, len = gdjs.Scn_95GameCode.GDTest_95TextObjects2.length ;i < len;++i) {
    gdjs.Scn_95GameCode.GDTest_95TextObjects2[i].setString("Mobile");
}
}}

}


{


gdjs.Scn_95GameCode.condition0IsTrue_0.val = false;
{
gdjs.Scn_95GameCode.condition0IsTrue_0.val = !(gdjs.evtTools.systemInfo.isMobile());
}if (gdjs.Scn_95GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Test_Text"), gdjs.Scn_95GameCode.GDTest_95TextObjects1);
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(3), false);
}{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}{for(var i = 0, len = gdjs.Scn_95GameCode.GDTest_95TextObjects1.length ;i < len;++i) {
    gdjs.Scn_95GameCode.GDTest_95TextObjects1[i].setString("PC");
}
}}

}


};gdjs.Scn_95GameCode.eventsList1 = function(runtimeScene) {

{


gdjs.Scn_95GameCode.condition0IsTrue_0.val = false;
{
gdjs.Scn_95GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Scn_95GameCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Scn_95GameCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.Scn_95GameCode.eventsList2 = function(runtimeScene) {

{


gdjs.Scn_95GameCode.condition0IsTrue_0.val = false;
{
gdjs.Scn_95GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Middle");
}if (gdjs.Scn_95GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Test_Text"), gdjs.Scn_95GameCode.GDTest_95TextObjects2);
{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) - (gdjs.evtTools.input.getMouseX(runtimeScene, "", 0) - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0))), "", 0);
}{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) - (gdjs.evtTools.input.getMouseY(runtimeScene, "", 0) - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1))), "", 0);
}{for(var i = 0, len = gdjs.Scn_95GameCode.GDTest_95TextObjects2.length ;i < len;++i) {
    gdjs.Scn_95GameCode.GDTest_95TextObjects2[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0) - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0))));
}
}}

}


{


{
{runtimeScene.getGame().getVariables().getFromIndex(2).add(gdjs.evtTools.input.getMouseWheelDelta(runtimeScene));
}}

}


{


gdjs.Scn_95GameCode.condition0IsTrue_0.val = false;
{
gdjs.Scn_95GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) > 5000;
}if (gdjs.Scn_95GameCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(5000);
}}

}


{


gdjs.Scn_95GameCode.condition0IsTrue_0.val = false;
{
gdjs.Scn_95GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) < 500;
}if (gdjs.Scn_95GameCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(500);
}}

}


{


{
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) / 1000, "", 0);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0));
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(gdjs.evtTools.input.getMouseY(runtimeScene, "", 0));
}}

}


};gdjs.Scn_95GameCode.eventsList3 = function(runtimeScene) {

{


gdjs.Scn_95GameCode.condition0IsTrue_0.val = false;
{
gdjs.Scn_95GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(3), false);
}if (gdjs.Scn_95GameCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Scn_95GameCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.Scn_95GameCode.eventsList4 = function(runtimeScene) {

{


gdjs.Scn_95GameCode.condition0IsTrue_0.val = false;
{
gdjs.Scn_95GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(3), true);
}if (gdjs.Scn_95GameCode.condition0IsTrue_0.val) {
}

}


};gdjs.Scn_95GameCode.eventsList5 = function(runtimeScene) {

};gdjs.Scn_95GameCode.eventsList6 = function(runtimeScene) {

{


gdjs.Scn_95GameCode.eventsList1(runtimeScene);
}


{


gdjs.Scn_95GameCode.eventsList3(runtimeScene);
}


{


gdjs.Scn_95GameCode.eventsList4(runtimeScene);
}


{


gdjs.Scn_95GameCode.eventsList5(runtimeScene);
}


};

gdjs.Scn_95GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Scn_95GameCode.GDTest_95PatternObjects1.length = 0;
gdjs.Scn_95GameCode.GDTest_95PatternObjects2.length = 0;
gdjs.Scn_95GameCode.GDTest_95PatternObjects3.length = 0;
gdjs.Scn_95GameCode.GDTest_95Castle_950Objects1.length = 0;
gdjs.Scn_95GameCode.GDTest_95Castle_950Objects2.length = 0;
gdjs.Scn_95GameCode.GDTest_95Castle_950Objects3.length = 0;
gdjs.Scn_95GameCode.GDTest_95TextObjects1.length = 0;
gdjs.Scn_95GameCode.GDTest_95TextObjects2.length = 0;
gdjs.Scn_95GameCode.GDTest_95TextObjects3.length = 0;

gdjs.Scn_95GameCode.eventsList6(runtimeScene);

return;

}

gdjs['Scn_95GameCode'] = gdjs.Scn_95GameCode;
