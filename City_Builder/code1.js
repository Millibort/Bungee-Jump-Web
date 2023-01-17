gdjs.Scn_95HomeCode = {};
gdjs.Scn_95HomeCode.GDTxt_95TitleObjects1= [];
gdjs.Scn_95HomeCode.GDTxt_95TitleObjects2= [];
gdjs.Scn_95HomeCode.GDTxt_95TitleObjects3= [];
gdjs.Scn_95HomeCode.GDTxt_95SubtitleObjects1= [];
gdjs.Scn_95HomeCode.GDTxt_95SubtitleObjects2= [];
gdjs.Scn_95HomeCode.GDTxt_95SubtitleObjects3= [];
gdjs.Scn_95HomeCode.GDObj_95Anti_95MobileObjects1= [];
gdjs.Scn_95HomeCode.GDObj_95Anti_95MobileObjects2= [];
gdjs.Scn_95HomeCode.GDObj_95Anti_95MobileObjects3= [];
gdjs.Scn_95HomeCode.GDTxt_95Anti_95MobileObjects1= [];
gdjs.Scn_95HomeCode.GDTxt_95Anti_95MobileObjects2= [];
gdjs.Scn_95HomeCode.GDTxt_95Anti_95MobileObjects3= [];
gdjs.Scn_95HomeCode.GDTxt_95NewGameObjects1= [];
gdjs.Scn_95HomeCode.GDTxt_95NewGameObjects2= [];
gdjs.Scn_95HomeCode.GDTxt_95NewGameObjects3= [];
gdjs.Scn_95HomeCode.GDTxt_95SettingsObjects1= [];
gdjs.Scn_95HomeCode.GDTxt_95SettingsObjects2= [];
gdjs.Scn_95HomeCode.GDTxt_95SettingsObjects3= [];
gdjs.Scn_95HomeCode.GDObj_95BackgroundObjects1= [];
gdjs.Scn_95HomeCode.GDObj_95BackgroundObjects2= [];
gdjs.Scn_95HomeCode.GDObj_95BackgroundObjects3= [];

gdjs.Scn_95HomeCode.conditionTrue_0 = {val:false};
gdjs.Scn_95HomeCode.condition0IsTrue_0 = {val:false};
gdjs.Scn_95HomeCode.condition1IsTrue_0 = {val:false};
gdjs.Scn_95HomeCode.condition2IsTrue_0 = {val:false};
gdjs.Scn_95HomeCode.conditionTrue_1 = {val:false};
gdjs.Scn_95HomeCode.condition0IsTrue_1 = {val:false};
gdjs.Scn_95HomeCode.condition1IsTrue_1 = {val:false};
gdjs.Scn_95HomeCode.condition2IsTrue_1 = {val:false};


gdjs.Scn_95HomeCode.eventsList0 = function(runtimeScene) {

{


gdjs.Scn_95HomeCode.condition0IsTrue_0.val = false;
{
gdjs.Scn_95HomeCode.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
}if (gdjs.Scn_95HomeCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Obj_Anti_Mobile"), gdjs.Scn_95HomeCode.GDObj_95Anti_95MobileObjects2);
gdjs.copyArray(runtimeScene.getObjects("Txt_Anti_Mobile"), gdjs.Scn_95HomeCode.GDTxt_95Anti_95MobileObjects2);
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(3), true);
}{for(var i = 0, len = gdjs.Scn_95HomeCode.GDTxt_95Anti_95MobileObjects2.length ;i < len;++i) {
    gdjs.Scn_95HomeCode.GDTxt_95Anti_95MobileObjects2[i].setX(0);
}
}{for(var i = 0, len = gdjs.Scn_95HomeCode.GDObj_95Anti_95MobileObjects2.length ;i < len;++i) {
    gdjs.Scn_95HomeCode.GDObj_95Anti_95MobileObjects2[i].setX(0);
}
}}

}


{


gdjs.Scn_95HomeCode.condition0IsTrue_0.val = false;
{
gdjs.Scn_95HomeCode.condition0IsTrue_0.val = !(gdjs.evtTools.systemInfo.isMobile());
}if (gdjs.Scn_95HomeCode.condition0IsTrue_0.val) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(3), false);
}}

}


};gdjs.Scn_95HomeCode.mapOfGDgdjs_46Scn_9595HomeCode_46GDTxt_9595NewGameObjects2Objects = Hashtable.newFrom({"Txt_NewGame": gdjs.Scn_95HomeCode.GDTxt_95NewGameObjects2});
gdjs.Scn_95HomeCode.mapOfGDgdjs_46Scn_9595HomeCode_46GDTxt_9595NewGameObjects2Objects = Hashtable.newFrom({"Txt_NewGame": gdjs.Scn_95HomeCode.GDTxt_95NewGameObjects2});
gdjs.Scn_95HomeCode.mapOfGDgdjs_46Scn_9595HomeCode_46GDTxt_9595SettingsObjects2Objects = Hashtable.newFrom({"Txt_Settings": gdjs.Scn_95HomeCode.GDTxt_95SettingsObjects2});
gdjs.Scn_95HomeCode.mapOfGDgdjs_46Scn_9595HomeCode_46GDTxt_9595SettingsObjects2Objects = Hashtable.newFrom({"Txt_Settings": gdjs.Scn_95HomeCode.GDTxt_95SettingsObjects2});
gdjs.Scn_95HomeCode.mapOfGDgdjs_46Scn_9595HomeCode_46GDTxt_9595SettingsObjects2Objects = Hashtable.newFrom({"Txt_Settings": gdjs.Scn_95HomeCode.GDTxt_95SettingsObjects2});
gdjs.Scn_95HomeCode.mapOfGDgdjs_46Scn_9595HomeCode_46GDTxt_9595NewGameObjects1Objects = Hashtable.newFrom({"Txt_NewGame": gdjs.Scn_95HomeCode.GDTxt_95NewGameObjects1});
gdjs.Scn_95HomeCode.eventsList1 = function(runtimeScene) {

{


gdjs.Scn_95HomeCode.condition0IsTrue_0.val = false;
gdjs.Scn_95HomeCode.condition1IsTrue_0.val = false;
{
gdjs.Scn_95HomeCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Intro_Done") >= 8;
}if ( gdjs.Scn_95HomeCode.condition0IsTrue_0.val ) {
{
gdjs.Scn_95HomeCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(3), false);
}}
if (gdjs.Scn_95HomeCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "Test_Music\\Test_00.wav", false, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(10)), 1);
}{gdjs.evtTools.sound.playMusic(runtimeScene, "Test_Music\\Test_0.wav", false, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(10)), 1);
}{gdjs.evtTools.runtimeScene.removeTimer(runtimeScene, "Intro_Done");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Intro_2");
}}

}


{


gdjs.Scn_95HomeCode.condition0IsTrue_0.val = false;
gdjs.Scn_95HomeCode.condition1IsTrue_0.val = false;
{
gdjs.Scn_95HomeCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Intro_2") >= 4;
}if ( gdjs.Scn_95HomeCode.condition0IsTrue_0.val ) {
{
gdjs.Scn_95HomeCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(3), false);
}}
if (gdjs.Scn_95HomeCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "Test_Music\\Test_00.wav", false, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(10)), 1);
}{gdjs.evtTools.sound.playMusic(runtimeScene, "Test_Music\\Test_0.wav", false, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(10)), 1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Intro_2");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Txt_NewGame"), gdjs.Scn_95HomeCode.GDTxt_95NewGameObjects2);

gdjs.Scn_95HomeCode.condition0IsTrue_0.val = false;
gdjs.Scn_95HomeCode.condition1IsTrue_0.val = false;
{
gdjs.Scn_95HomeCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scn_95HomeCode.mapOfGDgdjs_46Scn_9595HomeCode_46GDTxt_9595NewGameObjects2Objects, runtimeScene, true, false);
}if ( gdjs.Scn_95HomeCode.condition0IsTrue_0.val ) {
{
{gdjs.Scn_95HomeCode.conditionTrue_1 = gdjs.Scn_95HomeCode.condition1IsTrue_0;
gdjs.Scn_95HomeCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(51216260);
}
}}
if (gdjs.Scn_95HomeCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Scn_95HomeCode.GDTxt_95NewGameObjects2 */
{for(var i = 0, len = gdjs.Scn_95HomeCode.GDTxt_95NewGameObjects2.length ;i < len;++i) {
    gdjs.Scn_95HomeCode.GDTxt_95NewGameObjects2[i].setCharacterSize(50);
}
}{for(var i = 0, len = gdjs.Scn_95HomeCode.GDTxt_95NewGameObjects2.length ;i < len;++i) {
    gdjs.Scn_95HomeCode.GDTxt_95NewGameObjects2[i].setX(gdjs.Scn_95HomeCode.GDTxt_95NewGameObjects2[i].getX() - (10));
}
}{for(var i = 0, len = gdjs.Scn_95HomeCode.GDTxt_95NewGameObjects2.length ;i < len;++i) {
    gdjs.Scn_95HomeCode.GDTxt_95NewGameObjects2[i].setY(gdjs.Scn_95HomeCode.GDTxt_95NewGameObjects2[i].getY() - (5));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Txt_NewGame"), gdjs.Scn_95HomeCode.GDTxt_95NewGameObjects2);

gdjs.Scn_95HomeCode.condition0IsTrue_0.val = false;
gdjs.Scn_95HomeCode.condition1IsTrue_0.val = false;
{
gdjs.Scn_95HomeCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scn_95HomeCode.mapOfGDgdjs_46Scn_9595HomeCode_46GDTxt_9595NewGameObjects2Objects, runtimeScene, true, true);
}if ( gdjs.Scn_95HomeCode.condition0IsTrue_0.val ) {
{
{gdjs.Scn_95HomeCode.conditionTrue_1 = gdjs.Scn_95HomeCode.condition1IsTrue_0;
gdjs.Scn_95HomeCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(51217500);
}
}}
if (gdjs.Scn_95HomeCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Scn_95HomeCode.GDTxt_95NewGameObjects2 */
{for(var i = 0, len = gdjs.Scn_95HomeCode.GDTxt_95NewGameObjects2.length ;i < len;++i) {
    gdjs.Scn_95HomeCode.GDTxt_95NewGameObjects2[i].setCharacterSize(40);
}
}{for(var i = 0, len = gdjs.Scn_95HomeCode.GDTxt_95NewGameObjects2.length ;i < len;++i) {
    gdjs.Scn_95HomeCode.GDTxt_95NewGameObjects2[i].setX(gdjs.Scn_95HomeCode.GDTxt_95NewGameObjects2[i].getX() + (10));
}
}{for(var i = 0, len = gdjs.Scn_95HomeCode.GDTxt_95NewGameObjects2.length ;i < len;++i) {
    gdjs.Scn_95HomeCode.GDTxt_95NewGameObjects2[i].setY(gdjs.Scn_95HomeCode.GDTxt_95NewGameObjects2[i].getY() + (5));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Txt_Settings"), gdjs.Scn_95HomeCode.GDTxt_95SettingsObjects2);

gdjs.Scn_95HomeCode.condition0IsTrue_0.val = false;
gdjs.Scn_95HomeCode.condition1IsTrue_0.val = false;
{
gdjs.Scn_95HomeCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scn_95HomeCode.mapOfGDgdjs_46Scn_9595HomeCode_46GDTxt_9595SettingsObjects2Objects, runtimeScene, true, false);
}if ( gdjs.Scn_95HomeCode.condition0IsTrue_0.val ) {
{
{gdjs.Scn_95HomeCode.conditionTrue_1 = gdjs.Scn_95HomeCode.condition1IsTrue_0;
gdjs.Scn_95HomeCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(51218716);
}
}}
if (gdjs.Scn_95HomeCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Scn_95HomeCode.GDTxt_95SettingsObjects2 */
{for(var i = 0, len = gdjs.Scn_95HomeCode.GDTxt_95SettingsObjects2.length ;i < len;++i) {
    gdjs.Scn_95HomeCode.GDTxt_95SettingsObjects2[i].setCharacterSize(50);
}
}{for(var i = 0, len = gdjs.Scn_95HomeCode.GDTxt_95SettingsObjects2.length ;i < len;++i) {
    gdjs.Scn_95HomeCode.GDTxt_95SettingsObjects2[i].setX(gdjs.Scn_95HomeCode.GDTxt_95SettingsObjects2[i].getX() - (10));
}
}{for(var i = 0, len = gdjs.Scn_95HomeCode.GDTxt_95SettingsObjects2.length ;i < len;++i) {
    gdjs.Scn_95HomeCode.GDTxt_95SettingsObjects2[i].setY(gdjs.Scn_95HomeCode.GDTxt_95SettingsObjects2[i].getY() - (5));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Txt_Settings"), gdjs.Scn_95HomeCode.GDTxt_95SettingsObjects2);

gdjs.Scn_95HomeCode.condition0IsTrue_0.val = false;
gdjs.Scn_95HomeCode.condition1IsTrue_0.val = false;
{
gdjs.Scn_95HomeCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scn_95HomeCode.mapOfGDgdjs_46Scn_9595HomeCode_46GDTxt_9595SettingsObjects2Objects, runtimeScene, true, true);
}if ( gdjs.Scn_95HomeCode.condition0IsTrue_0.val ) {
{
{gdjs.Scn_95HomeCode.conditionTrue_1 = gdjs.Scn_95HomeCode.condition1IsTrue_0;
gdjs.Scn_95HomeCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(51219956);
}
}}
if (gdjs.Scn_95HomeCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Scn_95HomeCode.GDTxt_95SettingsObjects2 */
{for(var i = 0, len = gdjs.Scn_95HomeCode.GDTxt_95SettingsObjects2.length ;i < len;++i) {
    gdjs.Scn_95HomeCode.GDTxt_95SettingsObjects2[i].setCharacterSize(40);
}
}{for(var i = 0, len = gdjs.Scn_95HomeCode.GDTxt_95SettingsObjects2.length ;i < len;++i) {
    gdjs.Scn_95HomeCode.GDTxt_95SettingsObjects2[i].setX(gdjs.Scn_95HomeCode.GDTxt_95SettingsObjects2[i].getX() + (10));
}
}{for(var i = 0, len = gdjs.Scn_95HomeCode.GDTxt_95SettingsObjects2.length ;i < len;++i) {
    gdjs.Scn_95HomeCode.GDTxt_95SettingsObjects2[i].setY(gdjs.Scn_95HomeCode.GDTxt_95SettingsObjects2[i].getY() + (5));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Txt_Settings"), gdjs.Scn_95HomeCode.GDTxt_95SettingsObjects2);

gdjs.Scn_95HomeCode.condition0IsTrue_0.val = false;
gdjs.Scn_95HomeCode.condition1IsTrue_0.val = false;
{
gdjs.Scn_95HomeCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scn_95HomeCode.mapOfGDgdjs_46Scn_9595HomeCode_46GDTxt_9595SettingsObjects2Objects, runtimeScene, true, false);
}if ( gdjs.Scn_95HomeCode.condition0IsTrue_0.val ) {
{
gdjs.Scn_95HomeCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Scn_95HomeCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Scn_Settings");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Txt_NewGame"), gdjs.Scn_95HomeCode.GDTxt_95NewGameObjects1);

gdjs.Scn_95HomeCode.condition0IsTrue_0.val = false;
gdjs.Scn_95HomeCode.condition1IsTrue_0.val = false;
{
gdjs.Scn_95HomeCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scn_95HomeCode.mapOfGDgdjs_46Scn_9595HomeCode_46GDTxt_9595NewGameObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Scn_95HomeCode.condition0IsTrue_0.val ) {
{
gdjs.Scn_95HomeCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Scn_95HomeCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Scn_Game");
}}

}


};gdjs.Scn_95HomeCode.eventsList2 = function(runtimeScene) {

{


gdjs.Scn_95HomeCode.condition0IsTrue_0.val = false;
{
gdjs.Scn_95HomeCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Scn_95HomeCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Test_0_Intro.wav", false, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(10)), 1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Intro_Done");
}
{ //Subevents
gdjs.Scn_95HomeCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.Scn_95HomeCode.condition0IsTrue_0.val = false;
{
gdjs.Scn_95HomeCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(3), false);
}if (gdjs.Scn_95HomeCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Scn_95HomeCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.Scn_95HomeCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Scn_95HomeCode.GDTxt_95TitleObjects1.length = 0;
gdjs.Scn_95HomeCode.GDTxt_95TitleObjects2.length = 0;
gdjs.Scn_95HomeCode.GDTxt_95TitleObjects3.length = 0;
gdjs.Scn_95HomeCode.GDTxt_95SubtitleObjects1.length = 0;
gdjs.Scn_95HomeCode.GDTxt_95SubtitleObjects2.length = 0;
gdjs.Scn_95HomeCode.GDTxt_95SubtitleObjects3.length = 0;
gdjs.Scn_95HomeCode.GDObj_95Anti_95MobileObjects1.length = 0;
gdjs.Scn_95HomeCode.GDObj_95Anti_95MobileObjects2.length = 0;
gdjs.Scn_95HomeCode.GDObj_95Anti_95MobileObjects3.length = 0;
gdjs.Scn_95HomeCode.GDTxt_95Anti_95MobileObjects1.length = 0;
gdjs.Scn_95HomeCode.GDTxt_95Anti_95MobileObjects2.length = 0;
gdjs.Scn_95HomeCode.GDTxt_95Anti_95MobileObjects3.length = 0;
gdjs.Scn_95HomeCode.GDTxt_95NewGameObjects1.length = 0;
gdjs.Scn_95HomeCode.GDTxt_95NewGameObjects2.length = 0;
gdjs.Scn_95HomeCode.GDTxt_95NewGameObjects3.length = 0;
gdjs.Scn_95HomeCode.GDTxt_95SettingsObjects1.length = 0;
gdjs.Scn_95HomeCode.GDTxt_95SettingsObjects2.length = 0;
gdjs.Scn_95HomeCode.GDTxt_95SettingsObjects3.length = 0;
gdjs.Scn_95HomeCode.GDObj_95BackgroundObjects1.length = 0;
gdjs.Scn_95HomeCode.GDObj_95BackgroundObjects2.length = 0;
gdjs.Scn_95HomeCode.GDObj_95BackgroundObjects3.length = 0;

gdjs.Scn_95HomeCode.eventsList2(runtimeScene);

return;

}

gdjs['Scn_95HomeCode'] = gdjs.Scn_95HomeCode;
