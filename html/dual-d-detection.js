/************************* 
 * Dual-D-Detection Test *
 *************************/

import { PsychoJS } from './lib/core-2020.1.js';
import * as core from './lib/core-2020.1.js';
import { TrialHandler } from './lib/data-2020.1.js';
import { Scheduler } from './lib/util-2020.1.js';
import * as util from './lib/util-2020.1.js';
import * as visual from './lib/visual-2020.1.js';
import * as sound from './lib/sound-2020.1.js';

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'pix',
  waitBlanking: true
});

// store info about the experiment session:
let expName = 'dual-d-detection';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'session': '001'};

// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(introRoutineBegin());
flowScheduler.add(introRoutineEachFrame());
flowScheduler.add(introRoutineEnd());
flowScheduler.add(fillerRoutineBegin());
flowScheduler.add(fillerRoutineEachFrame());
flowScheduler.add(fillerRoutineEnd());
flowScheduler.add(screen_scaleRoutineBegin());
flowScheduler.add(screen_scaleRoutineEachFrame());
flowScheduler.add(screen_scaleRoutineEnd());
flowScheduler.add(instructions_1RoutineBegin());
flowScheduler.add(instructions_1RoutineEachFrame());
flowScheduler.add(instructions_1RoutineEnd());
flowScheduler.add(instructions_3RoutineBegin());
flowScheduler.add(instructions_3RoutineEachFrame());
flowScheduler.add(instructions_3RoutineEnd());
flowScheduler.add(practice_message_0RoutineBegin());
flowScheduler.add(practice_message_0RoutineEachFrame());
flowScheduler.add(practice_message_0RoutineEnd());
const practice_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(practice_loopLoopBegin, practice_loopLoopScheduler);
flowScheduler.add(practice_loopLoopScheduler);
flowScheduler.add(practice_loopLoopEnd);
flowScheduler.add(ready_goRoutineBegin());
flowScheduler.add(ready_goRoutineEachFrame());
flowScheduler.add(ready_goRoutineEnd());
const trials_2LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_2LoopBegin, trials_2LoopScheduler);
flowScheduler.add(trials_2LoopScheduler);
flowScheduler.add(trials_2LoopEnd);
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  });


var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2020.1.2';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  psychoJS.setRedirectUrls(('https://sx.sona-systems.com/webstudy_credit.aspx?experiment_id=1621&credit_token=2b8d0d3e731c48929c2a06e168ff391d&survey_code=' + expInfo['participant']), '');

  return Scheduler.Event.NEXT;
}


var introClock;
var instructions;
var ready;
var randomIntFromInterval;
var win;
var average;
var event;
var thisExp;
var round;
var fillerClock;
var placeholder;
var screen_scaleClock;
var oldt;
var x_size;
var y_size;
var screen_height;
var x_scale;
var y_scale;
var dbase;
var unittext;
var vsize;
var text_top;
var text_bottom;
var ccimage;
var instructions_1Clock;
var slide1;
var key_resp_instru1;
var instructions_3Clock;
var slide1_2;
var key_resp_instru1_2;
var practice_message_0Clock;
var instructions_5;
var ready_4;
var trialClock;
var N1path;
var N2path;
var Tpath;
var fixation;
var noise1;
var test_stimulus;
var noise2;
var key_resp;
var decision_order_0;
var branchClock;
var placeholder_4;
var corrD1;
var wrongD1;
var practice_message_d1Clock;
var instructions_4;
var ready_3;
var d2_correctClock;
var fixation_2;
var noise1_2;
var test_stimulus_2;
var noise2_2;
var key_resp_corrD1;
var decision_order_2;
var d2_wrongClock;
var fixation_3;
var noise1_3;
var test_stimulus_3;
var noise2_3;
var key_resp_wrongD1;
var decision_order;
var practice_message_d2Clock;
var msg;
var feedback_text_2;
var ready_practice_d2;
var ready_goClock;
var instructions_2;
var ready_2;
var feedback_3Clock;
var feedback_text;
var adjust_contrastClock;
var contrast_lvl;
var acc_current;
var pause;
var press_continue;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "intro"
  introClock = new util.Clock();
  instructions = new visual.TextStim({
    win: psychoJS.window,
    name: 'instructions',
    text: "Press the 'Enter' key to begin the experiment.",
    font: 'Arial',
    units: 'pix', 
    pos: [0, 0], height: 1.0,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  ready = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  randomIntFromInterval = function(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  win=psychoJS.window;
  
  average = (arr) => (arr.reduce((a, b) => (a + b), 0)) / arr.length
  
  event=psychoJS.eventManager;
  thisExp=psychoJS.experiment;
  
  round = function (a) {
      return Math.round(a);
  }
  
  
  // Initialize components for Routine "filler"
  fillerClock = new util.Clock();
  placeholder = new visual.Polygon ({
    win: psychoJS.window, name: 'placeholder', units : 'height', 
    edges: 8, size:[1e-05, 0.0001],
    ori: 0, pos: [1, 1],
    lineWidth: 2, lineColor: new util.Color([(- 0.004), (- 0.004), (- 0.004)]),
    fillColor: new util.Color([(- 0.004), (- 0.004), (- 0.004)]),
    opacity: 0, depth: 0, interpolate: true,
  });
  
  // Initialize components for Routine "screen_scale"
  screen_scaleClock = new util.Clock();
  oldt = 0;
  x_size = 8.56;
  y_size = 5.398;
  screen_height = 0;
  if ((win.units === "norm")) {
      x_scale = 0.05;
      y_scale = 0.1;
      dbase = 0.0001;
      unittext = " norm units";
      vsize = 2;
  } else {
      if ((win.units === "pix")) {
          x_scale = 60;
          y_scale = 40;
          dbase = 0.1;
          unittext = " pixels";
          vsize = win.size[1];
      } else {
          x_scale = 0.05;
          y_scale = 0.05;
          dbase = 0.0001;
          unittext = " height units";
          vsize = 1;
      }
  }
  
  text_top = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_top',
    text: 'Resize this image to match the size of a credit card, using the following keys:\nUp/Down arrow keys for taller/shorter\nLeft/right arrow keys for narrower/wider',
    font: 'Arial',
    units: 'height', 
    pos: [0, 0.25], height: 0.02,  wrapWidth: 1.5, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  text_bottom = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_bottom',
    text: 'Press the space bar when done',
    font: 'Arial',
    units: 'height', 
    pos: [0, (- 0.25)], height: 0.02,  wrapWidth: 1.5, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  ccimage = new visual.ImageStim({
    win : psychoJS.window,
    name : 'ccimage', units : undefined, 
    image : 'bank-1300155_640.png', mask : undefined,
    ori : 0, pos : [0, 0], size : [(x_size * x_scale), (y_size * y_scale)],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -3.0 
  });
  // Initialize components for Routine "instructions_1"
  instructions_1Clock = new util.Clock();
  slide1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'slide1', units : 'pix', 
    image : 'instru.png', mask : undefined,
    ori : 0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  key_resp_instru1 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instructions_3"
  instructions_3Clock = new util.Clock();
  slide1_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'slide1_2', units : 'pix', 
    image : 'instru2.png', mask : undefined,
    ori : 0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  key_resp_instru1_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "practice_message_0"
  practice_message_0Clock = new util.Clock();
  instructions_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instructions_5',
    text: 'Now there will be 4 practice trials.\n\nPlease pay attention to the stimuli and to how the stimulus displayed\nfor the 2nd decision depends on the accuracy of your first response.\n\nPress any key to continue.',
    font: 'Arial',
    units: 'height', 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  ready_4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  N1path = "meh";
  N2path = "meh";
  Tpath = "meh";
  
  fixation = new visual.ShapeStim ({
    win: psychoJS.window, name: 'fixation', 
    vertices: 'cross', size:[1.0, 1.0],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  noise1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'noise1', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  test_stimulus = new visual.ImageStim({
    win : psychoJS.window,
    name : 'test_stimulus', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -3.0 
  });
  noise2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'noise2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -4.0 
  });
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  decision_order_0 = new visual.TextStim({
    win: psychoJS.window,
    name: 'decision_order_0',
    text: '1',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -6.0 
  });
  
  // Initialize components for Routine "branch"
  branchClock = new util.Clock();
  placeholder_4 = new visual.Polygon ({
    win: psychoJS.window, name: 'placeholder_4', units : 'height', 
    edges: 8, size:[1e-05, 0.0001],
    ori: 0, pos: [1, 1],
    lineWidth: 2, lineColor: new util.Color([(- 0.004), (- 0.004), (- 0.004)]),
    fillColor: new util.Color([(- 0.004), (- 0.004), (- 0.004)]),
    opacity: 0, depth: 0, interpolate: true,
  });
  
  corrD1 = 0;
  wrongD1 = 0;
  
  // Initialize components for Routine "practice_message_d1"
  practice_message_d1Clock = new util.Clock();
  instructions_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instructions_4',
    text: 'That was the first decision.\n\nIf you gave the correct response \n(regardless of whether you pressed the S or N keys), \nin the second decision you will see a Signal.\n\nIf instead your response was wrong, \nin the second decision you will see a patch containing only Noise.\n\n\n\nPress any key to continue to the second decision.',
    font: 'Arial',
    units: 'pix', 
    pos: [0, 0], height: 1.0,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  ready_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "d2_correct"
  d2_correctClock = new util.Clock();
  fixation_2 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'fixation_2', 
    vertices: 'cross', size:[1.0, 1.0],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  noise1_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'noise1_2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  test_stimulus_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'test_stimulus_2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -3.0 
  });
  noise2_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'noise2_2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -4.0 
  });
  key_resp_corrD1 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  decision_order_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'decision_order_2',
    text: '2',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -6.0 
  });
  
  // Initialize components for Routine "d2_wrong"
  d2_wrongClock = new util.Clock();
  fixation_3 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'fixation_3', 
    vertices: 'cross', size:[1.0, 1.0],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  noise1_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'noise1_3', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  test_stimulus_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'test_stimulus_3', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -3.0 
  });
  noise2_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'noise2_3', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -4.0 
  });
  key_resp_wrongD1 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  decision_order = new visual.TextStim({
    win: psychoJS.window,
    name: 'decision_order',
    text: '2',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -6.0 
  });
  
  // Initialize components for Routine "practice_message_d2"
  practice_message_d2Clock = new util.Clock();
  msg = "doh!";
  
  feedback_text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_text_2',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: undefined, ori: 0,
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: 1,
    depth: -1.0 
  });
  
  ready_practice_d2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "ready_go"
  ready_goClock = new util.Clock();
  instructions_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instructions_2',
    text: 'Press any key to begin the experiment.',
    font: 'Arial',
    units: 'height', 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  ready_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  N1path = "meh";
  N2path = "meh";
  Tpath = "meh";
  
  fixation = new visual.ShapeStim ({
    win: psychoJS.window, name: 'fixation', 
    vertices: 'cross', size:[1.0, 1.0],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  noise1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'noise1', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  test_stimulus = new visual.ImageStim({
    win : psychoJS.window,
    name : 'test_stimulus', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -3.0 
  });
  noise2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'noise2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -4.0 
  });
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  decision_order_0 = new visual.TextStim({
    win: psychoJS.window,
    name: 'decision_order_0',
    text: '1',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -6.0 
  });
  
  // Initialize components for Routine "branch"
  branchClock = new util.Clock();
  placeholder_4 = new visual.Polygon ({
    win: psychoJS.window, name: 'placeholder_4', units : 'height', 
    edges: 8, size:[1e-05, 0.0001],
    ori: 0, pos: [1, 1],
    lineWidth: 2, lineColor: new util.Color([(- 0.004), (- 0.004), (- 0.004)]),
    fillColor: new util.Color([(- 0.004), (- 0.004), (- 0.004)]),
    opacity: 0, depth: 0, interpolate: true,
  });
  
  corrD1 = 0;
  wrongD1 = 0;
  
  // Initialize components for Routine "d2_correct"
  d2_correctClock = new util.Clock();
  fixation_2 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'fixation_2', 
    vertices: 'cross', size:[1.0, 1.0],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  noise1_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'noise1_2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  test_stimulus_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'test_stimulus_2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -3.0 
  });
  noise2_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'noise2_2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -4.0 
  });
  key_resp_corrD1 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  decision_order_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'decision_order_2',
    text: '2',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -6.0 
  });
  
  // Initialize components for Routine "d2_wrong"
  d2_wrongClock = new util.Clock();
  fixation_3 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'fixation_3', 
    vertices: 'cross', size:[1.0, 1.0],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  noise1_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'noise1_3', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  test_stimulus_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'test_stimulus_3', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -3.0 
  });
  noise2_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'noise2_3', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -4.0 
  });
  key_resp_wrongD1 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  decision_order = new visual.TextStim({
    win: psychoJS.window,
    name: 'decision_order',
    text: '2',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -6.0 
  });
  
  // Initialize components for Routine "feedback_3"
  feedback_3Clock = new util.Clock();
  msg = "doh!";
  
  feedback_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_text',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: undefined, ori: 0,
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: 1,
    depth: -1.0 
  });
  
  // Initialize components for Routine "adjust_contrast"
  adjust_contrastClock = new util.Clock();
  contrast_lvl = 10;
  acc_current = 0.7;
  
  pause = new visual.TextStim({
    win: psychoJS.window,
    name: 'pause',
    text: 'Need a break?\n\nPress any key to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  press_continue = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var _ready_allKeys;
var introComponents;
function introRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'intro'-------
    t = 0;
    introClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    instructions.setHeight((0.5 * y_scale));
    ready.keys = undefined;
    ready.rt = undefined;
    _ready_allKeys = [];
    // Expose some general PsychoJS objects (debugging)
    // window.psychoJS = psychoJS;
    // keep track of which components have finished
    introComponents = [];
    introComponents.push(instructions);
    introComponents.push(ready);
    
    for (const thisComponent of introComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


var continueRoutine;
function introRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'intro'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = introClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instructions* updates
    if (t >= 0.0 && instructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructions.tStart = t;  // (not accounting for frame time here)
      instructions.frameNStart = frameN;  // exact frame index
      
      instructions.setAutoDraw(true);
    }

    
    // *ready* updates
    if (t >= 0.0 && ready.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ready.tStart = t;  // (not accounting for frame time here)
      ready.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { ready.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { ready.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { ready.clearEvents(); });
    }

    if (ready.status === PsychoJS.Status.STARTED) {
      let theseKeys = ready.getKeys({keyList: ['return'], waitRelease: false});
      _ready_allKeys = _ready_allKeys.concat(theseKeys);
      if (_ready_allKeys.length > 0) {
        ready.keys = _ready_allKeys[_ready_allKeys.length - 1].name;  // just the last key pressed
        ready.rt = _ready_allKeys[_ready_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of introComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function introRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'intro'-------
    for (const thisComponent of introComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('ready.keys', ready.keys);
    if (typeof ready.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('ready.rt', ready.rt);
        routineTimer.reset();
        }
    
    ready.stop();
    // the Routine "intro" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var fillerComponents;
function fillerRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'filler'-------
    t = 0;
    fillerClock.reset(); // clock
    frameN = -1;
    routineTimer.add(0.200000);
    // update component parameters for each repeat
    // keep track of which components have finished
    fillerComponents = [];
    fillerComponents.push(placeholder);
    
    for (const thisComponent of fillerComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


var frameRemains;
function fillerRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'filler'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = fillerClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *placeholder* updates
    if (t >= 0 && placeholder.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      placeholder.tStart = t;  // (not accounting for frame time here)
      placeholder.frameNStart = frameN;  // exact frame index
      
      placeholder.setAutoDraw(true);
    }

    frameRemains = 0 + 0.2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (placeholder.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      placeholder.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of fillerComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fillerRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'filler'-------
    for (const thisComponent of fillerComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var screen_scaleComponents;
function screen_scaleRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'screen_scale'-------
    t = 0;
    screen_scaleClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    // keep track of which components have finished
    screen_scaleComponents = [];
    screen_scaleComponents.push(text_top);
    screen_scaleComponents.push(text_bottom);
    screen_scaleComponents.push(ccimage);
    
    for (const thisComponent of screen_scaleComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


var _pj;
var keys;
var dscale;
function screen_scaleRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'screen_scale'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = screen_scaleClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    keys = event.getKeys();
    if (keys.length) {
        if (((t - oldt) < 0.5)) {
            dscale = (5 * dbase);
            oldt = t;
        } else {
            dscale = dbase;
            oldt = t;
        }
        if (_pj.in_es6("space", keys)) {
            continueRoutine = false;
        } else {
            if (_pj.in_es6("up", keys)) {
                y_scale = (round(((y_scale + dscale) * 10000)) / 10000);
            } else {
                if (_pj.in_es6("down", keys)) {
                    y_scale = (round(((y_scale - dscale) * 10000)) / 10000);
                } else {
                    if (_pj.in_es6("left", keys)) {
                        x_scale = (round(((x_scale - dscale) * 10000)) / 10000);
                    } else {
                        if (_pj.in_es6("right", keys)) {
                            x_scale = (round(((x_scale + dscale) * 10000)) / 10000);
                        }
                    }
                }
            }
        }
        screen_height = (round(((vsize * 10) / y_scale)) / 10);
        //text_bottom.text = (((((((("X Scale = " + x_scale.toString()) + unittext) + " per cm, Y Scale = ") + y_scale.toString()) + unittext) + " per cm\nScreen height = ") + screen_height.toString()) + " cm\n\nPress the space bar when done");
        ccimage.size = [(x_size * x_scale), (y_size * y_scale)];
    }
    
    
    // *text_top* updates
    if (t >= 0.0 && text_top.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_top.tStart = t;  // (not accounting for frame time here)
      text_top.frameNStart = frameN;  // exact frame index
      
      text_top.setAutoDraw(true);
    }

    
    // *text_bottom* updates
    if (t >= 0.0 && text_bottom.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_bottom.tStart = t;  // (not accounting for frame time here)
      text_bottom.frameNStart = frameN;  // exact frame index
      
      text_bottom.setAutoDraw(true);
    }

    
    // *ccimage* updates
    if (t >= 0.0 && ccimage.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ccimage.tStart = t;  // (not accounting for frame time here)
      ccimage.frameNStart = frameN;  // exact frame index
      
      ccimage.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of screen_scaleComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function screen_scaleRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'screen_scale'-------
    for (const thisComponent of screen_scaleComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    thisExp.addData("X Scale", x_scale);
    thisExp.addData("Y Scale", y_scale);
    
    // the Routine "screen_scale" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_instru1_allKeys;
var instructions_1Components;
function instructions_1RoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'instructions_1'-------
    t = 0;
    instructions_1Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    slide1.setSize([((1.5 * 17.78) * x_scale), ((1.5 * 10) * y_scale)]);
    key_resp_instru1.keys = undefined;
    key_resp_instru1.rt = undefined;
    _key_resp_instru1_allKeys = [];
    // keep track of which components have finished
    instructions_1Components = [];
    instructions_1Components.push(slide1);
    instructions_1Components.push(key_resp_instru1);
    
    for (const thisComponent of instructions_1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function instructions_1RoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'instructions_1'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = instructions_1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *slide1* updates
    if (t >= 0.0 && slide1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slide1.tStart = t;  // (not accounting for frame time here)
      slide1.frameNStart = frameN;  // exact frame index
      
      slide1.setAutoDraw(true);
    }

    
    // *key_resp_instru1* updates
    if (t >= 0.5 && key_resp_instru1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_instru1.tStart = t;  // (not accounting for frame time here)
      key_resp_instru1.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_instru1.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_instru1.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_instru1.clearEvents(); });
    }

    if (key_resp_instru1.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_instru1.getKeys({keyList: [], waitRelease: false});
      _key_resp_instru1_allKeys = _key_resp_instru1_allKeys.concat(theseKeys);
      if (_key_resp_instru1_allKeys.length > 0) {
        key_resp_instru1.keys = _key_resp_instru1_allKeys[_key_resp_instru1_allKeys.length - 1].name;  // just the last key pressed
        key_resp_instru1.rt = _key_resp_instru1_allKeys[_key_resp_instru1_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instructions_1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructions_1RoutineEnd(trials) {
  return function () {
    //------Ending Routine 'instructions_1'-------
    for (const thisComponent of instructions_1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_instru1.keys', key_resp_instru1.keys);
    if (typeof key_resp_instru1.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_instru1.rt', key_resp_instru1.rt);
        routineTimer.reset();
        }
    
    key_resp_instru1.stop();
    // the Routine "instructions_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_instru1_2_allKeys;
var instructions_3Components;
function instructions_3RoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'instructions_3'-------
    t = 0;
    instructions_3Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    slide1_2.setSize([((1.5 * 17.78) * x_scale), ((1.5 * 10) * y_scale)]);
    key_resp_instru1_2.keys = undefined;
    key_resp_instru1_2.rt = undefined;
    _key_resp_instru1_2_allKeys = [];
    // keep track of which components have finished
    instructions_3Components = [];
    instructions_3Components.push(slide1_2);
    instructions_3Components.push(key_resp_instru1_2);
    
    for (const thisComponent of instructions_3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function instructions_3RoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'instructions_3'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = instructions_3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *slide1_2* updates
    if (t >= 0.0 && slide1_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slide1_2.tStart = t;  // (not accounting for frame time here)
      slide1_2.frameNStart = frameN;  // exact frame index
      
      slide1_2.setAutoDraw(true);
    }

    
    // *key_resp_instru1_2* updates
    if (t >= 0.5 && key_resp_instru1_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_instru1_2.tStart = t;  // (not accounting for frame time here)
      key_resp_instru1_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_instru1_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_instru1_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_instru1_2.clearEvents(); });
    }

    if (key_resp_instru1_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_instru1_2.getKeys({keyList: [], waitRelease: false});
      _key_resp_instru1_2_allKeys = _key_resp_instru1_2_allKeys.concat(theseKeys);
      if (_key_resp_instru1_2_allKeys.length > 0) {
        key_resp_instru1_2.keys = _key_resp_instru1_2_allKeys[_key_resp_instru1_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_instru1_2.rt = _key_resp_instru1_2_allKeys[_key_resp_instru1_2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instructions_3Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructions_3RoutineEnd(trials) {
  return function () {
    //------Ending Routine 'instructions_3'-------
    for (const thisComponent of instructions_3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_instru1_2.keys', key_resp_instru1_2.keys);
    if (typeof key_resp_instru1_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_instru1_2.rt', key_resp_instru1_2.rt);
        routineTimer.reset();
        }
    
    key_resp_instru1_2.stop();
    // the Routine "instructions_3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _ready_4_allKeys;
var practice_message_0Components;
function practice_message_0RoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'practice_message_0'-------
    t = 0;
    practice_message_0Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    ready_4.keys = undefined;
    ready_4.rt = undefined;
    _ready_4_allKeys = [];
    // keep track of which components have finished
    practice_message_0Components = [];
    practice_message_0Components.push(instructions_5);
    practice_message_0Components.push(ready_4);
    
    for (const thisComponent of practice_message_0Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function practice_message_0RoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'practice_message_0'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = practice_message_0Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instructions_5* updates
    if (t >= 0.0 && instructions_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructions_5.tStart = t;  // (not accounting for frame time here)
      instructions_5.frameNStart = frameN;  // exact frame index
      
      instructions_5.setAutoDraw(true);
    }

    
    // *ready_4* updates
    if (t >= 0.0 && ready_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ready_4.tStart = t;  // (not accounting for frame time here)
      ready_4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { ready_4.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { ready_4.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { ready_4.clearEvents(); });
    }

    if (ready_4.status === PsychoJS.Status.STARTED) {
      let theseKeys = ready_4.getKeys({keyList: [], waitRelease: false});
      _ready_4_allKeys = _ready_4_allKeys.concat(theseKeys);
      if (_ready_4_allKeys.length > 0) {
        ready_4.keys = _ready_4_allKeys[_ready_4_allKeys.length - 1].name;  // just the last key pressed
        ready_4.rt = _ready_4_allKeys[_ready_4_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of practice_message_0Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function practice_message_0RoutineEnd(trials) {
  return function () {
    //------Ending Routine 'practice_message_0'-------
    for (const thisComponent of practice_message_0Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('ready_4.keys', ready_4.keys);
    if (typeof ready_4.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('ready_4.rt', ready_4.rt);
        routineTimer.reset();
        }
    
    ready_4.stop();
    // the Routine "practice_message_0" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var practice_loop;
var currentLoop;
function practice_loopLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  practice_loop = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 2, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'conditions.csv',
    seed: undefined, name: 'practice_loop'
  });
  psychoJS.experiment.addLoop(practice_loop); // add the loop to the experiment
  currentLoop = practice_loop;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisPractice_loop of practice_loop) {
    const snapshot = practice_loop.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(trialRoutineBegin(snapshot));
    thisScheduler.add(trialRoutineEachFrame(snapshot));
    thisScheduler.add(trialRoutineEnd(snapshot));
    thisScheduler.add(branchRoutineBegin(snapshot));
    thisScheduler.add(branchRoutineEachFrame(snapshot));
    thisScheduler.add(branchRoutineEnd(snapshot));
    thisScheduler.add(practice_message_d1RoutineBegin(snapshot));
    thisScheduler.add(practice_message_d1RoutineEachFrame(snapshot));
    thisScheduler.add(practice_message_d1RoutineEnd(snapshot));
    const practice_correctLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(practice_correctLoopBegin, practice_correctLoopScheduler);
    thisScheduler.add(practice_correctLoopScheduler);
    thisScheduler.add(practice_correctLoopEnd);
    const practice_wrongLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(practice_wrongLoopBegin, practice_wrongLoopScheduler);
    thisScheduler.add(practice_wrongLoopScheduler);
    thisScheduler.add(practice_wrongLoopEnd);
    thisScheduler.add(practice_message_d2RoutineBegin(snapshot));
    thisScheduler.add(practice_message_d2RoutineEachFrame(snapshot));
    thisScheduler.add(practice_message_d2RoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


var practice_correct;
function practice_correctLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  practice_correct = new TrialHandler({
    psychoJS: psychoJS,
    nReps: corrD1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: TrialHandler.importConditions(psychoJS.serverManager, 'conditions.csv', '0'),
    seed: undefined, name: 'practice_correct'
  });
  psychoJS.experiment.addLoop(practice_correct); // add the loop to the experiment
  currentLoop = practice_correct;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisPractice_correct of practice_correct) {
    const snapshot = practice_correct.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(d2_correctRoutineBegin(snapshot));
    thisScheduler.add(d2_correctRoutineEachFrame(snapshot));
    thisScheduler.add(d2_correctRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function practice_correctLoopEnd() {
  psychoJS.experiment.removeLoop(practice_correct);

  return Scheduler.Event.NEXT;
}


var practice_wrong;
function practice_wrongLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  practice_wrong = new TrialHandler({
    psychoJS: psychoJS,
    nReps: wrongD1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: TrialHandler.importConditions(psychoJS.serverManager, 'conditions.csv', '1'),
    seed: undefined, name: 'practice_wrong'
  });
  psychoJS.experiment.addLoop(practice_wrong); // add the loop to the experiment
  currentLoop = practice_wrong;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisPractice_wrong of practice_wrong) {
    const snapshot = practice_wrong.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(d2_wrongRoutineBegin(snapshot));
    thisScheduler.add(d2_wrongRoutineEachFrame(snapshot));
    thisScheduler.add(d2_wrongRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function practice_wrongLoopEnd() {
  psychoJS.experiment.removeLoop(practice_wrong);

  return Scheduler.Event.NEXT;
}


function practice_loopLoopEnd() {
  psychoJS.experiment.removeLoop(practice_loop);

  return Scheduler.Event.NEXT;
}


var trials_2;
function trials_2LoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials_2 = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 20, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'trials_2'
  });
  psychoJS.experiment.addLoop(trials_2); // add the loop to the experiment
  currentLoop = trials_2;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTrial_2 of trials_2) {
    const snapshot = trials_2.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    const trialsLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(trialsLoopBegin, trialsLoopScheduler);
    thisScheduler.add(trialsLoopScheduler);
    thisScheduler.add(trialsLoopEnd);
    thisScheduler.add(adjust_contrastRoutineBegin(snapshot));
    thisScheduler.add(adjust_contrastRoutineEachFrame(snapshot));
    thisScheduler.add(adjust_contrastRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


var trials;
function trialsLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 5, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'conditions.csv',
    seed: undefined, name: 'trials'
  });
  psychoJS.experiment.addLoop(trials); // add the loop to the experiment
  currentLoop = trials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTrial of trials) {
    const snapshot = trials.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(trialRoutineBegin(snapshot));
    thisScheduler.add(trialRoutineEachFrame(snapshot));
    thisScheduler.add(trialRoutineEnd(snapshot));
    thisScheduler.add(branchRoutineBegin(snapshot));
    thisScheduler.add(branchRoutineEachFrame(snapshot));
    thisScheduler.add(branchRoutineEnd(snapshot));
    const correct_D1LoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(correct_D1LoopBegin, correct_D1LoopScheduler);
    thisScheduler.add(correct_D1LoopScheduler);
    thisScheduler.add(correct_D1LoopEnd);
    const wrong_D1LoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(wrong_D1LoopBegin, wrong_D1LoopScheduler);
    thisScheduler.add(wrong_D1LoopScheduler);
    thisScheduler.add(wrong_D1LoopEnd);
    thisScheduler.add(feedback_3RoutineBegin(snapshot));
    thisScheduler.add(feedback_3RoutineEachFrame(snapshot));
    thisScheduler.add(feedback_3RoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


var correct_D1;
function correct_D1LoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  correct_D1 = new TrialHandler({
    psychoJS: psychoJS,
    nReps: corrD1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: TrialHandler.importConditions(psychoJS.serverManager, 'conditions.csv', '0'),
    seed: undefined, name: 'correct_D1'
  });
  psychoJS.experiment.addLoop(correct_D1); // add the loop to the experiment
  currentLoop = correct_D1;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisCorrect_D1 of correct_D1) {
    const snapshot = correct_D1.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(d2_correctRoutineBegin(snapshot));
    thisScheduler.add(d2_correctRoutineEachFrame(snapshot));
    thisScheduler.add(d2_correctRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function correct_D1LoopEnd() {
  psychoJS.experiment.removeLoop(correct_D1);

  return Scheduler.Event.NEXT;
}


var wrong_D1;
function wrong_D1LoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  wrong_D1 = new TrialHandler({
    psychoJS: psychoJS,
    nReps: wrongD1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: TrialHandler.importConditions(psychoJS.serverManager, 'conditions.csv', '1'),
    seed: undefined, name: 'wrong_D1'
  });
  psychoJS.experiment.addLoop(wrong_D1); // add the loop to the experiment
  currentLoop = wrong_D1;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisWrong_D1 of wrong_D1) {
    const snapshot = wrong_D1.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(d2_wrongRoutineBegin(snapshot));
    thisScheduler.add(d2_wrongRoutineEachFrame(snapshot));
    thisScheduler.add(d2_wrongRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function wrong_D1LoopEnd() {
  psychoJS.experiment.removeLoop(wrong_D1);

  return Scheduler.Event.NEXT;
}


function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}


function trials_2LoopEnd() {
  psychoJS.experiment.removeLoop(trials_2);

  return Scheduler.Event.NEXT;
}


var _key_resp_allKeys;
var trialComponents;
function trialRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'trial'-------
    t = 0;
    trialClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    N1path = ['stimuli/N/', randomIntFromInterval(1, 200), '.bmp'].join('');
    N2path = ['stimuli/N/', randomIntFromInterval(1, 200), '.bmp'].join('');
    
    if ((trialtype === 'N')) {
        Tpath = ['stimuli/N/', randomIntFromInterval(1, 200), '.bmp'].join('');
    } else {
        Tpath = ['stimuli/S/SCS', contrast_lvl, '/', randomIntFromInterval(1, 20), '.bmp'].join('');
    }
    fixation.setSize([(0.5 * x_scale), (0.5 * y_scale)]);
    noise1.setSize([(4 * x_scale), (4 * y_scale)]);
    noise1.setImage(N1path);
    test_stimulus.setSize([(4 * x_scale), (4 * y_scale)]);
    test_stimulus.setImage(Tpath);
    noise2.setSize([(4 * x_scale), (4 * y_scale)]);
    noise2.setImage(N2path);
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    decision_order_0.setPos([((- 0.5) * x_scale), (4 * y_scale)]);
    decision_order_0.setHeight((0.6 * y_scale));
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(fixation);
    trialComponents.push(noise1);
    trialComponents.push(test_stimulus);
    trialComponents.push(noise2);
    trialComponents.push(key_resp);
    trialComponents.push(decision_order_0);
    
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function trialRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'trial'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fixation* updates
    if (t >= 0.0 && fixation.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation.tStart = t;  // (not accounting for frame time here)
      fixation.frameNStart = frameN;  // exact frame index
      
      fixation.setAutoDraw(true);
    }

    frameRemains = 0.3  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fixation.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fixation.setAutoDraw(false);
    }
    
    // *noise1* updates
    if (t >= 0.6 && noise1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      noise1.tStart = t;  // (not accounting for frame time here)
      noise1.frameNStart = frameN;  // exact frame index
      
      noise1.setAutoDraw(true);
    }

    frameRemains = 0.6 + 0.1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (noise1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      noise1.setAutoDraw(false);
    }
    
    // *test_stimulus* updates
    if (t >= 0.7 && test_stimulus.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      test_stimulus.tStart = t;  // (not accounting for frame time here)
      test_stimulus.frameNStart = frameN;  // exact frame index
      
      test_stimulus.setAutoDraw(true);
    }

    frameRemains = 0.7 + 0.1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (test_stimulus.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      test_stimulus.setAutoDraw(false);
    }
    
    // *noise2* updates
    if (t >= 0.8 && noise2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      noise2.tStart = t;  // (not accounting for frame time here)
      noise2.frameNStart = frameN;  // exact frame index
      
      noise2.setAutoDraw(true);
    }

    frameRemains = 0.8 + 0.1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (noise2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      noise2.setAutoDraw(false);
    }
    
    // *key_resp* updates
    if (t >= 0.9 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }

    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['s', 'n'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[0].name;  // just the first key pressed
        key_resp.rt = _key_resp_allKeys[0].rt;
        // was this correct?
        if (key_resp.keys == cresp) {
            key_resp.corr = 1;
        } else {
            key_resp.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *decision_order_0* updates
    if (t >= 0.0 && decision_order_0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      decision_order_0.tStart = t;  // (not accounting for frame time here)
      decision_order_0.frameNStart = frameN;  // exact frame index
      
      decision_order_0.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trialRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'trial'-------
    for (const thisComponent of trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    //if ((key_resp.corr === 1)) {
    //    corrD1 = 1;
    //    wrongD1 = 0;
    //} else {
    //    corrD1 = 0;
    //    wrongD1 = 1;
    //}
    
    psychoJS.experiment.addData('decision_D1', 1);
    psychoJS.experiment.addData('contrast_lvl_D1', contrast_lvl);
    psychoJS.experiment.addData('Tpath_D1', Tpath);
    // was no response the correct answer?!
    if (key_resp.keys === undefined) {
      if (['None','none',undefined].includes(cresp)) {
         key_resp.corr = 1;  // correct non-response
      } else {
         key_resp.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    psychoJS.experiment.addData('key_resp.corr', key_resp.corr);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var branchComponents;
function branchRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'branch'-------
    t = 0;
    branchClock.reset(); // clock
    frameN = -1;
    routineTimer.add(0.400000);
    // update component parameters for each repeat
    if ((key_resp.corr === 1)) {
        corrD1 = 1;
        wrongD1 = 0;
    } else {
        corrD1 = 0;
        wrongD1 = 1;
    }
    
    // keep track of which components have finished
    branchComponents = [];
    branchComponents.push(placeholder_4);
    
    for (const thisComponent of branchComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function branchRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'branch'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = branchClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *placeholder_4* updates
    if (t >= 0 && placeholder_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      placeholder_4.tStart = t;  // (not accounting for frame time here)
      placeholder_4.frameNStart = frameN;  // exact frame index
      
      placeholder_4.setAutoDraw(true);
    }

    frameRemains = 0 + 0.4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (placeholder_4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      placeholder_4.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of branchComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function branchRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'branch'-------
    for (const thisComponent of branchComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var _ready_3_allKeys;
var practice_message_d1Components;
function practice_message_d1RoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'practice_message_d1'-------
    t = 0;
    practice_message_d1Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    instructions_4.setHeight((0.5 * y_scale));
    ready_3.keys = undefined;
    ready_3.rt = undefined;
    _ready_3_allKeys = [];
    // keep track of which components have finished
    practice_message_d1Components = [];
    practice_message_d1Components.push(instructions_4);
    practice_message_d1Components.push(ready_3);
    
    for (const thisComponent of practice_message_d1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function practice_message_d1RoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'practice_message_d1'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = practice_message_d1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instructions_4* updates
    if (t >= 0.0 && instructions_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructions_4.tStart = t;  // (not accounting for frame time here)
      instructions_4.frameNStart = frameN;  // exact frame index
      
      instructions_4.setAutoDraw(true);
    }

    
    // *ready_3* updates
    if (t >= 0.0 && ready_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ready_3.tStart = t;  // (not accounting for frame time here)
      ready_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { ready_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { ready_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { ready_3.clearEvents(); });
    }

    if (ready_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = ready_3.getKeys({keyList: [], waitRelease: false});
      _ready_3_allKeys = _ready_3_allKeys.concat(theseKeys);
      if (_ready_3_allKeys.length > 0) {
        ready_3.keys = _ready_3_allKeys[_ready_3_allKeys.length - 1].name;  // just the last key pressed
        ready_3.rt = _ready_3_allKeys[_ready_3_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of practice_message_d1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function practice_message_d1RoutineEnd(trials) {
  return function () {
    //------Ending Routine 'practice_message_d1'-------
    for (const thisComponent of practice_message_d1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('ready_3.keys', ready_3.keys);
    if (typeof ready_3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('ready_3.rt', ready_3.rt);
        routineTimer.reset();
        }
    
    ready_3.stop();
    // the Routine "practice_message_d1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_corrD1_allKeys;
var d2_correctComponents;
function d2_correctRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'd2_correct'-------
    t = 0;
    d2_correctClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    N1path = ['stimuli/N/', randomIntFromInterval(1, 200), '.bmp'].join('');
    N2path = ['stimuli/N/', randomIntFromInterval(1, 200), '.bmp'].join('');
    Tpath = ['stimuli/S/SCS', contrast_lvl, '/', randomIntFromInterval(1, 20), '.bmp'].join('');
    
    
    fixation_2.setSize([(0.5 * x_scale), (0.5 * y_scale)]);
    noise1_2.setSize([(4 * x_scale), (4 * y_scale)]);
    noise1_2.setImage(N1path);
    test_stimulus_2.setSize([(4 * x_scale), (4 * y_scale)]);
    test_stimulus_2.setImage(Tpath);
    noise2_2.setSize([(4 * x_scale), (4 * y_scale)]);
    noise2_2.setImage(N2path);
    key_resp_corrD1.keys = undefined;
    key_resp_corrD1.rt = undefined;
    _key_resp_corrD1_allKeys = [];
    decision_order_2.setPos([(0.5 * x_scale), (4 * y_scale)]);
    decision_order_2.setHeight((0.6 * y_scale));
    // keep track of which components have finished
    d2_correctComponents = [];
    d2_correctComponents.push(fixation_2);
    d2_correctComponents.push(noise1_2);
    d2_correctComponents.push(test_stimulus_2);
    d2_correctComponents.push(noise2_2);
    d2_correctComponents.push(key_resp_corrD1);
    d2_correctComponents.push(decision_order_2);
    
    for (const thisComponent of d2_correctComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function d2_correctRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'd2_correct'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = d2_correctClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fixation_2* updates
    if (t >= 0.0 && fixation_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation_2.tStart = t;  // (not accounting for frame time here)
      fixation_2.frameNStart = frameN;  // exact frame index
      
      fixation_2.setAutoDraw(true);
    }

    frameRemains = 0.3  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fixation_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fixation_2.setAutoDraw(false);
    }
    
    // *noise1_2* updates
    if (t >= 0.6 && noise1_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      noise1_2.tStart = t;  // (not accounting for frame time here)
      noise1_2.frameNStart = frameN;  // exact frame index
      
      noise1_2.setAutoDraw(true);
    }

    frameRemains = 0.6 + 0.1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (noise1_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      noise1_2.setAutoDraw(false);
    }
    
    // *test_stimulus_2* updates
    if (t >= 0.7 && test_stimulus_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      test_stimulus_2.tStart = t;  // (not accounting for frame time here)
      test_stimulus_2.frameNStart = frameN;  // exact frame index
      
      test_stimulus_2.setAutoDraw(true);
    }

    frameRemains = 0.7 + 0.1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (test_stimulus_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      test_stimulus_2.setAutoDraw(false);
    }
    
    // *noise2_2* updates
    if (t >= 0.8 && noise2_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      noise2_2.tStart = t;  // (not accounting for frame time here)
      noise2_2.frameNStart = frameN;  // exact frame index
      
      noise2_2.setAutoDraw(true);
    }

    frameRemains = 0.8 + 0.1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (noise2_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      noise2_2.setAutoDraw(false);
    }
    
    // *key_resp_corrD1* updates
    if (t >= 0.9 && key_resp_corrD1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_corrD1.tStart = t;  // (not accounting for frame time here)
      key_resp_corrD1.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_corrD1.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_corrD1.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_corrD1.clearEvents(); });
    }

    if (key_resp_corrD1.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_corrD1.getKeys({keyList: ['s', 'n'], waitRelease: false});
      _key_resp_corrD1_allKeys = _key_resp_corrD1_allKeys.concat(theseKeys);
      if (_key_resp_corrD1_allKeys.length > 0) {
        key_resp_corrD1.keys = _key_resp_corrD1_allKeys[0].name;  // just the first key pressed
        key_resp_corrD1.rt = _key_resp_corrD1_allKeys[0].rt;
        // was this correct?
        if (key_resp_corrD1.keys == 's') {
            key_resp_corrD1.corr = 1;
        } else {
            key_resp_corrD1.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *decision_order_2* updates
    if (t >= 0.0 && decision_order_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      decision_order_2.tStart = t;  // (not accounting for frame time here)
      decision_order_2.frameNStart = frameN;  // exact frame index
      
      decision_order_2.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of d2_correctComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function d2_correctRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'd2_correct'-------
    for (const thisComponent of d2_correctComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('decision_D2', 2);
    psychoJS.experiment.addData('contrast_lvl_D2', contrast_lvl);
    psychoJS.experiment.addData('Tpath_D2', Tpath);
    
    trials.finished=true;
    // was no response the correct answer?!
    if (key_resp_corrD1.keys === undefined) {
      if (['None','none',undefined].includes('s')) {
         key_resp_corrD1.corr = 1;  // correct non-response
      } else {
         key_resp_corrD1.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('key_resp_corrD1.keys', key_resp_corrD1.keys);
    psychoJS.experiment.addData('key_resp_corrD1.corr', key_resp_corrD1.corr);
    if (typeof key_resp_corrD1.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_corrD1.rt', key_resp_corrD1.rt);
        routineTimer.reset();
        }
    
    key_resp_corrD1.stop();
    // the Routine "d2_correct" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_wrongD1_allKeys;
var d2_wrongComponents;
function d2_wrongRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'd2_wrong'-------
    t = 0;
    d2_wrongClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    N1path = ['stimuli/N/', randomIntFromInterval(1, 200), '.bmp'].join('');
    N2path = ['stimuli/N/', randomIntFromInterval(1, 200), '.bmp'].join('');
    Tpath = ['stimuli/N/', randomIntFromInterval(1, 200), '.bmp'].join('');
    
    
    fixation_3.setSize([(0.5 * x_scale), (0.5 * y_scale)]);
    noise1_3.setSize([(4 * x_scale), (4 * y_scale)]);
    noise1_3.setImage(N1path);
    test_stimulus_3.setSize([(4 * x_scale), (4 * y_scale)]);
    test_stimulus_3.setImage(Tpath);
    noise2_3.setSize([(4 * x_scale), (4 * y_scale)]);
    noise2_3.setImage(N2path);
    key_resp_wrongD1.keys = undefined;
    key_resp_wrongD1.rt = undefined;
    _key_resp_wrongD1_allKeys = [];
    decision_order.setPos([(0.5 * x_scale), (4 * y_scale)]);
    decision_order.setHeight((0.6 * y_scale));
    // keep track of which components have finished
    d2_wrongComponents = [];
    d2_wrongComponents.push(fixation_3);
    d2_wrongComponents.push(noise1_3);
    d2_wrongComponents.push(test_stimulus_3);
    d2_wrongComponents.push(noise2_3);
    d2_wrongComponents.push(key_resp_wrongD1);
    d2_wrongComponents.push(decision_order);
    
    for (const thisComponent of d2_wrongComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function d2_wrongRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'd2_wrong'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = d2_wrongClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fixation_3* updates
    if (t >= 0.0 && fixation_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation_3.tStart = t;  // (not accounting for frame time here)
      fixation_3.frameNStart = frameN;  // exact frame index
      
      fixation_3.setAutoDraw(true);
    }

    frameRemains = 0.3  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fixation_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fixation_3.setAutoDraw(false);
    }
    
    // *noise1_3* updates
    if (t >= 0.6 && noise1_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      noise1_3.tStart = t;  // (not accounting for frame time here)
      noise1_3.frameNStart = frameN;  // exact frame index
      
      noise1_3.setAutoDraw(true);
    }

    frameRemains = 0.6 + 0.1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (noise1_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      noise1_3.setAutoDraw(false);
    }
    
    // *test_stimulus_3* updates
    if (t >= 0.7 && test_stimulus_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      test_stimulus_3.tStart = t;  // (not accounting for frame time here)
      test_stimulus_3.frameNStart = frameN;  // exact frame index
      
      test_stimulus_3.setAutoDraw(true);
    }

    frameRemains = 0.7 + 0.1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (test_stimulus_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      test_stimulus_3.setAutoDraw(false);
    }
    
    // *noise2_3* updates
    if (t >= 0.8 && noise2_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      noise2_3.tStart = t;  // (not accounting for frame time here)
      noise2_3.frameNStart = frameN;  // exact frame index
      
      noise2_3.setAutoDraw(true);
    }

    frameRemains = 0.8 + 0.1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (noise2_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      noise2_3.setAutoDraw(false);
    }
    
    // *key_resp_wrongD1* updates
    if (t >= 0.9 && key_resp_wrongD1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_wrongD1.tStart = t;  // (not accounting for frame time here)
      key_resp_wrongD1.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_wrongD1.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_wrongD1.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_wrongD1.clearEvents(); });
    }

    if (key_resp_wrongD1.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_wrongD1.getKeys({keyList: ['s', 'n'], waitRelease: false});
      _key_resp_wrongD1_allKeys = _key_resp_wrongD1_allKeys.concat(theseKeys);
      if (_key_resp_wrongD1_allKeys.length > 0) {
        key_resp_wrongD1.keys = _key_resp_wrongD1_allKeys[0].name;  // just the first key pressed
        key_resp_wrongD1.rt = _key_resp_wrongD1_allKeys[0].rt;
        // was this correct?
        if (key_resp_wrongD1.keys == 'n') {
            key_resp_wrongD1.corr = 1;
        } else {
            key_resp_wrongD1.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *decision_order* updates
    if (t >= 0.0 && decision_order.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      decision_order.tStart = t;  // (not accounting for frame time here)
      decision_order.frameNStart = frameN;  // exact frame index
      
      decision_order.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of d2_wrongComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function d2_wrongRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'd2_wrong'-------
    for (const thisComponent of d2_wrongComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('decision_D2', 2);
    psychoJS.experiment.addData('contrast_lvl_D2', contrast_lvl);
    psychoJS.experiment.addData('Tpath_D2', Tpath);
    
    trials.finished=true;
    // was no response the correct answer?!
    if (key_resp_wrongD1.keys === undefined) {
      if (['None','none',undefined].includes('n')) {
         key_resp_wrongD1.corr = 1;  // correct non-response
      } else {
         key_resp_wrongD1.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('key_resp_wrongD1.keys', key_resp_wrongD1.keys);
    psychoJS.experiment.addData('key_resp_wrongD1.corr', key_resp_wrongD1.corr);
    if (typeof key_resp_wrongD1.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_wrongD1.rt', key_resp_wrongD1.rt);
        routineTimer.reset();
        }
    
    key_resp_wrongD1.stop();
    // the Routine "d2_wrong" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _ready_practice_d2_allKeys;
var practice_message_d2Components;
function practice_message_d2RoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'practice_message_d2'-------
    t = 0;
    practice_message_d2Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    if ((key_resp.corr === 1)) {
        if ((key_resp_corrD1.corr === 1)) {
            msg = "Your 2nd decision was correct\nMoreover, since the stimulus in the 2nd decision contained a Signal, \nit means that your 1st response was also correct.";
        } else {
            msg = "Your 2nd decision was wrong\nHowever, the stimulus in the 2nd decision contained a Signal, \nindicating that your 1st response was correct.";
        }
    } else {
        if ((key_resp_wrongD1.corr === 1)) {
            msg = "Your 2nd decision was correct\nHowever, the stimulus in the 2nd decision contained only Noise, \nindicating that your 1st response was wrong.";
        } else {
            msg = "Your 2nd decision was wrong\nMoreover, since the stimulus in the 2nd decision contained only Noise, \nit means that your 1st response was also wrong.";
        }
    }
    
    feedback_text_2.setText(msg);
    feedback_text_2.setHeight((0.5 * y_scale));
    ready_practice_d2.keys = undefined;
    ready_practice_d2.rt = undefined;
    _ready_practice_d2_allKeys = [];
    // keep track of which components have finished
    practice_message_d2Components = [];
    practice_message_d2Components.push(feedback_text_2);
    practice_message_d2Components.push(ready_practice_d2);
    
    for (const thisComponent of practice_message_d2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function practice_message_d2RoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'practice_message_d2'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = practice_message_d2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *feedback_text_2* updates
    if (t >= 0.0 && feedback_text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_text_2.tStart = t;  // (not accounting for frame time here)
      feedback_text_2.frameNStart = frameN;  // exact frame index
      
      feedback_text_2.setAutoDraw(true);
    }

    
    // *ready_practice_d2* updates
    if (t >= 0.0 && ready_practice_d2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ready_practice_d2.tStart = t;  // (not accounting for frame time here)
      ready_practice_d2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { ready_practice_d2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { ready_practice_d2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { ready_practice_d2.clearEvents(); });
    }

    if (ready_practice_d2.status === PsychoJS.Status.STARTED) {
      let theseKeys = ready_practice_d2.getKeys({keyList: [], waitRelease: false});
      _ready_practice_d2_allKeys = _ready_practice_d2_allKeys.concat(theseKeys);
      if (_ready_practice_d2_allKeys.length > 0) {
        ready_practice_d2.keys = _ready_practice_d2_allKeys[_ready_practice_d2_allKeys.length - 1].name;  // just the last key pressed
        ready_practice_d2.rt = _ready_practice_d2_allKeys[_ready_practice_d2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of practice_message_d2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function practice_message_d2RoutineEnd(trials) {
  return function () {
    //------Ending Routine 'practice_message_d2'-------
    for (const thisComponent of practice_message_d2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('ready_practice_d2.keys', ready_practice_d2.keys);
    if (typeof ready_practice_d2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('ready_practice_d2.rt', ready_practice_d2.rt);
        routineTimer.reset();
        }
    
    ready_practice_d2.stop();
    // the Routine "practice_message_d2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _ready_2_allKeys;
var ready_goComponents;
function ready_goRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'ready_go'-------
    t = 0;
    ready_goClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    ready_2.keys = undefined;
    ready_2.rt = undefined;
    _ready_2_allKeys = [];
    contrast_lvl = 10;
    acc_current = 0.7;
    
    // keep track of which components have finished
    ready_goComponents = [];
    ready_goComponents.push(instructions_2);
    ready_goComponents.push(ready_2);
    
    for (const thisComponent of ready_goComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function ready_goRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'ready_go'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = ready_goClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instructions_2* updates
    if (t >= 0.0 && instructions_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructions_2.tStart = t;  // (not accounting for frame time here)
      instructions_2.frameNStart = frameN;  // exact frame index
      
      instructions_2.setAutoDraw(true);
    }

    
    // *ready_2* updates
    if (t >= 0.0 && ready_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ready_2.tStart = t;  // (not accounting for frame time here)
      ready_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { ready_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { ready_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { ready_2.clearEvents(); });
    }

    if (ready_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = ready_2.getKeys({keyList: [], waitRelease: false});
      _ready_2_allKeys = _ready_2_allKeys.concat(theseKeys);
      if (_ready_2_allKeys.length > 0) {
        ready_2.keys = _ready_2_allKeys[_ready_2_allKeys.length - 1].name;  // just the last key pressed
        ready_2.rt = _ready_2_allKeys[_ready_2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ready_goComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ready_goRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'ready_go'-------
    for (const thisComponent of ready_goComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('ready_2.keys', ready_2.keys);
    if (typeof ready_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('ready_2.rt', ready_2.rt);
        routineTimer.reset();
        }
    
    ready_2.stop();
    // the Routine "ready_go" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var feedback_3Components;
function feedback_3RoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'feedback_3'-------
    t = 0;
    feedback_3Clock.reset(); // clock
    frameN = -1;
    routineTimer.add(0.400000);
    // update component parameters for each repeat
    if ((key_resp.corr === 1)) {
        if ((key_resp_corrD1.corr === 1)) {
            msg = "Your 2nd decision was correct";
        } else {
            msg = "Your 2nd decision was wrong";
        }
    } else {
        if ((key_resp_wrongD1.corr === 1)) {
            msg = "Your 2nd decision was correct";
        } else {
            msg = "Your 2nd decision was wrong";
        }
    }
    
    feedback_text.setText(msg);
    feedback_text.setHeight((0.5 * y_scale));
    // keep track of which components have finished
    feedback_3Components = [];
    feedback_3Components.push(feedback_text);
    
    for (const thisComponent of feedback_3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function feedback_3RoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'feedback_3'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = feedback_3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *feedback_text* updates
    if (t >= 0.0 && feedback_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_text.tStart = t;  // (not accounting for frame time here)
      feedback_text.frameNStart = frameN;  // exact frame index
      
      feedback_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback_text.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of feedback_3Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function feedback_3RoutineEnd(trials) {
  return function () {
    //------Ending Routine 'feedback_3'-------
    for (const thisComponent of feedback_3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var nTrialsSoFar;
var nCorr;
var eachResp;
var _press_continue_allKeys;
var adjust_contrastComponents;
function adjust_contrastRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'adjust_contrast'-------
    t = 0;
    adjust_contrastClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    nTrialsSoFar = psychoJS.experiment._trialsData.length;
    nCorr = 0;
    eachResp = 0;
    for (eachResp=nTrialsSoFar-19; eachResp<nTrialsSoFar; eachResp++) 
    {
      if (typeof psychoJS.experiment._trialsData[eachResp]['key_resp.corr'] !== 'undefined')
        {
          nCorr += psychoJS.experiment._trialsData[eachResp]['key_resp.corr'];
        }
    }
    acc_current = nCorr/10;
    
    //console.debug("### debug online contrast adjustment ###")
    //console.debug("current contrast: ",contrast_lvl)
    //console.debug("running average of accuracy: ",acc_current)
    
    
    if ((acc_current > 0.75)) {
        contrast_lvl = (contrast_lvl - 1);
        //console.debug("contrast decreased to",contrast_lvl) 
    }
    if ((acc_current < 0.65)) {
        contrast_lvl = (contrast_lvl + 1);
        //console.debug("contrast increased to",contrast_lvl)
    }
    if ((contrast_lvl < 1)) {
        contrast_lvl = 1;
    }
    if ((contrast_lvl > 10)) {
        contrast_lvl = 10;
    }
    
    //console.debug("### done ###")
    pause.setHeight((0.5 * y_scale));
    press_continue.keys = undefined;
    press_continue.rt = undefined;
    _press_continue_allKeys = [];
    // keep track of which components have finished
    adjust_contrastComponents = [];
    adjust_contrastComponents.push(pause);
    adjust_contrastComponents.push(press_continue);
    
    for (const thisComponent of adjust_contrastComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function adjust_contrastRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'adjust_contrast'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = adjust_contrastClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *pause* updates
    if (t >= 0.0 && pause.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pause.tStart = t;  // (not accounting for frame time here)
      pause.frameNStart = frameN;  // exact frame index
      
      pause.setAutoDraw(true);
    }

    
    // *press_continue* updates
    if (t >= 0.0 && press_continue.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      press_continue.tStart = t;  // (not accounting for frame time here)
      press_continue.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { press_continue.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { press_continue.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { press_continue.clearEvents(); });
    }

    if (press_continue.status === PsychoJS.Status.STARTED) {
      let theseKeys = press_continue.getKeys({keyList: [], waitRelease: false});
      _press_continue_allKeys = _press_continue_allKeys.concat(theseKeys);
      if (_press_continue_allKeys.length > 0) {
        press_continue.keys = _press_continue_allKeys[_press_continue_allKeys.length - 1].name;  // just the last key pressed
        press_continue.rt = _press_continue_allKeys[_press_continue_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of adjust_contrastComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function adjust_contrastRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'adjust_contrast'-------
    for (const thisComponent of adjust_contrastComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('press_continue.keys', press_continue.keys);
    if (typeof press_continue.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('press_continue.rt', press_continue.rt);
        routineTimer.reset();
        }
    
    press_continue.stop();
    // the Routine "adjust_contrast" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(thisScheduler, loop) {
  // ------Prepare for next entry------
  return function () {
    if (typeof loop !== 'undefined') {
      // ------Check if user ended loop early------
      if (loop.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(loop);
        }
      thisScheduler.stop();
      } else {
        const thisTrial = loop.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(loop);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(trials) {
  return function () {
    psychoJS.importAttributes(trials.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
