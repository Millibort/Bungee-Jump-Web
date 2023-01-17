gdjs.Scn_95SettingsCode = {};
gdjs.Scn_95SettingsCode.GDObj_95VolumeSlider_95BarObjects1= [];
gdjs.Scn_95SettingsCode.GDObj_95VolumeSlider_95BarObjects2= [];
gdjs.Scn_95SettingsCode.GDObj_95VolumeSlider_95BarObjects3= [];
gdjs.Scn_95SettingsCode.GDObj_95VolumeSlider_95KnobObjects1= [];
gdjs.Scn_95SettingsCode.GDObj_95VolumeSlider_95KnobObjects2= [];
gdjs.Scn_95SettingsCode.GDObj_95VolumeSlider_95KnobObjects3= [];
gdjs.Scn_95SettingsCode.GDTxt_95VolumeSlider_95Objects1= [];
gdjs.Scn_95SettingsCode.GDTxt_95VolumeSlider_95Objects2= [];
gdjs.Scn_95SettingsCode.GDTxt_95VolumeSlider_95Objects3= [];
gdjs.Scn_95SettingsCode.GDTxt_95Volume_95DispObjects1= [];
gdjs.Scn_95SettingsCode.GDTxt_95Volume_95DispObjects2= [];
gdjs.Scn_95SettingsCode.GDTxt_95Volume_95DispObjects3= [];
gdjs.Scn_95SettingsCode.GDObj_95BackButtonObjects1= [];
gdjs.Scn_95SettingsCode.GDObj_95BackButtonObjects2= [];
gdjs.Scn_95SettingsCode.GDObj_95BackButtonObjects3= [];

gdjs.Scn_95SettingsCode.conditionTrue_0 = {val:false};
gdjs.Scn_95SettingsCode.condition0IsTrue_0 = {val:false};
gdjs.Scn_95SettingsCode.condition1IsTrue_0 = {val:false};
gdjs.Scn_95SettingsCode.condition2IsTrue_0 = {val:false};


gdjs.Scn_95SettingsCode.mapOfGDgdjs_46Scn_9595SettingsCode_46GDObj_9595VolumeSlider_9595BarObjects1Objects = Hashtable.newFrom({"Obj_VolumeSlider_Bar": gdjs.Scn_95SettingsCode.GDObj_95VolumeSlider_95BarObjects1});
gdjs.Scn_95SettingsCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Obj_VolumeSlider_Knob"), gdjs.Scn_95SettingsCode.GDObj_95VolumeSlider_95KnobObjects2);

gdjs.Scn_95SettingsCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Scn_95SettingsCode.GDObj_95VolumeSlider_95KnobObjects2.length;i<l;++i) {
    if ( gdjs.Scn_95SettingsCode.GDObj_95VolumeSlider_95KnobObjects2[i].getY() < gdjs.evtTools.input.getMouseY(runtimeScene, "", 0) ) {
        gdjs.Scn_95SettingsCode.condition0IsTrue_0.val = true;
        gdjs.Scn_95SettingsCode.GDObj_95VolumeSlider_95KnobObjects2[k] = gdjs.Scn_95SettingsCode.GDObj_95VolumeSlider_95KnobObjects2[i];
        ++k;
    }
}
gdjs.Scn_95SettingsCode.GDObj_95VolumeSlider_95KnobObjects2.length = k;}if (gdjs.Scn_95SettingsCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(10).add(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Obj_VolumeSlider_Knob"), gdjs.Scn_95SettingsCode.GDObj_95VolumeSlider_95KnobObjects1);

gdjs.Scn_95SettingsCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Scn_95SettingsCode.GDObj_95VolumeSlider_95KnobObjects1.length;i<l;++i) {
    if ( gdjs.Scn_95SettingsCode.GDObj_95VolumeSlider_95KnobObjects1[i].getY() > gdjs.evtTools.input.getMouseY(runtimeScene, "", 0) ) {
        gdjs.Scn_95SettingsCode.condition0IsTrue_0.val = true;
        gdjs.Scn_95SettingsCode.GDObj_95VolumeSlider_95KnobObjects1[k] = gdjs.Scn_95SettingsCode.GDObj_95VolumeSlider_95KnobObjects1[i];
        ++k;
    }
}
gdjs.Scn_95SettingsCode.GDObj_95VolumeSlider_95KnobObjects1.length = k;}if (gdjs.Scn_95SettingsCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(10).sub(1);
}}

}


};gdjs.Scn_95SettingsCode.mapOfGDgdjs_46Scn_9595SettingsCode_46GDObj_9595BackButtonObjects1Objects = Hashtable.newFrom({"Obj_BackButton": gdjs.Scn_95SettingsCode.GDObj_95BackButtonObjects1});
gdjs.Scn_95SettingsCode.eventsList1 = function(runtimeScene) {

{


gdjs.Scn_95SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.Scn_95SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Bass_Repeats")) >= 2;
}if (gdjs.Scn_95SettingsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "Settings_Music\\Settings_Transition.wav", false, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(10)), 1);
}}

}


{


gdjs.Scn_95SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.Scn_95SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Bass_Repeats")) >= 3;
}if (gdjs.Scn_95SettingsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "Settings_Music\\Settings_Idk.wav", false, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(10)), 1);
}}

}


};gdjs.Scn_95SettingsCode.eventsList2 = function(runtimeScene) {

{


gdjs.Scn_95SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.Scn_95SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Scn_95SettingsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "Settings_Music\\Settings_Bassline.wav", false, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(10)), 1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Bass_Done");
}{runtimeScene.getVariables().get("Bass_Repeats").setNumber(1);
}}

}


{


gdjs.Scn_95SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.Scn_95SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Bass_Done") >= 8;
}if (gdjs.Scn_95SettingsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "Settings_Music\\Settings_Bassline.wav", false, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(10)), 1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Bass_Done");
}{runtimeScene.getVariables().get("Bass_Repeats").add(1);
}
{ //Subevents
gdjs.Scn_95SettingsCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.Scn_95SettingsCode.eventsList3 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("Obj_VolumeSlider_Knob"), gdjs.Scn_95SettingsCode.GDObj_95VolumeSlider_95KnobObjects1);
gdjs.copyArray(runtimeScene.getObjects("Txt_Volume_Disp"), gdjs.Scn_95SettingsCode.GDTxt_95Volume_95DispObjects1);
{for(var i = 0, len = gdjs.Scn_95SettingsCode.GDObj_95VolumeSlider_95KnobObjects1.length ;i < len;++i) {
    gdjs.Scn_95SettingsCode.GDObj_95VolumeSlider_95KnobObjects1[i].setY(138 + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(10)));
}
}{for(var i = 0, len = gdjs.Scn_95SettingsCode.GDTxt_95Volume_95DispObjects1.length ;i < len;++i) {
    gdjs.Scn_95SettingsCode.GDTxt_95Volume_95DispObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(10))));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Obj_VolumeSlider_Bar"), gdjs.Scn_95SettingsCode.GDObj_95VolumeSlider_95BarObjects1);

gdjs.Scn_95SettingsCode.condition0IsTrue_0.val = false;
gdjs.Scn_95SettingsCode.condition1IsTrue_0.val = false;
{
gdjs.Scn_95SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scn_95SettingsCode.mapOfGDgdjs_46Scn_9595SettingsCode_46GDObj_9595VolumeSlider_9595BarObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Scn_95SettingsCode.condition0IsTrue_0.val ) {
{
gdjs.Scn_95SettingsCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Scn_95SettingsCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.Scn_95SettingsCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.Scn_95SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.Scn_95SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(10)) < 0;
}if (gdjs.Scn_95SettingsCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(10).setNumber(0);
}}

}


{


gdjs.Scn_95SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.Scn_95SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(10)) > 100;
}if (gdjs.Scn_95SettingsCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(10).setNumber(100);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Obj_BackButton"), gdjs.Scn_95SettingsCode.GDObj_95BackButtonObjects1);

gdjs.Scn_95SettingsCode.condition0IsTrue_0.val = false;
gdjs.Scn_95SettingsCode.condition1IsTrue_0.val = false;
{
gdjs.Scn_95SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scn_95SettingsCode.mapOfGDgdjs_46Scn_9595SettingsCode_46GDObj_9595BackButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Scn_95SettingsCode.condition0IsTrue_0.val ) {
{
gdjs.Scn_95SettingsCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Scn_95SettingsCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


{


gdjs.Scn_95SettingsCode.eventsList2(runtimeScene);
}


};

gdjs.Scn_95SettingsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Scn_95SettingsCode.GDObj_95VolumeSlider_95BarObjects1.length = 0;
gdjs.Scn_95SettingsCode.GDObj_95VolumeSlider_95BarObjects2.length = 0;
gdjs.Scn_95SettingsCode.GDObj_95VolumeSlider_95BarObjects3.length = 0;
gdjs.Scn_95SettingsCode.GDObj_95VolumeSlider_95KnobObjects1.length = 0;
gdjs.Scn_95SettingsCode.GDObj_95VolumeSlider_95KnobObjects2.length = 0;
gdjs.Scn_95SettingsCode.GDObj_95VolumeSlider_95KnobObjects3.length = 0;
gdjs.Scn_95SettingsCode.GDTxt_95VolumeSlider_95Objects1.length = 0;
gdjs.Scn_95SettingsCode.GDTxt_95VolumeSlider_95Objects2.length = 0;
gdjs.Scn_95SettingsCode.GDTxt_95VolumeSlider_95Objects3.length = 0;
gdjs.Scn_95SettingsCode.GDTxt_95Volume_95DispObjects1.length = 0;
gdjs.Scn_95SettingsCode.GDTxt_95Volume_95DispObjects2.length = 0;
gdjs.Scn_95SettingsCode.GDTxt_95Volume_95DispObjects3.length = 0;
gdjs.Scn_95SettingsCode.GDObj_95BackButtonObjects1.length = 0;
gdjs.Scn_95SettingsCode.GDObj_95BackButtonObjects2.length = 0;
gdjs.Scn_95SettingsCode.GDObj_95BackButtonObjects3.length = 0;

gdjs.Scn_95SettingsCode.eventsList3(runtimeScene);

return;

}

gdjs['Scn_95SettingsCode'] = gdjs.Scn_95SettingsCode;
