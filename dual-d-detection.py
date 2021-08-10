#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2020.1.2),
    on Mon 25 Jan 2021 17:38:57 GMT
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

from __future__ import absolute_import, division

from psychopy import locale_setup
from psychopy import prefs
from psychopy import sound, gui, visual, core, data, event, logging, clock
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle
import os  # handy system and path functions
import sys  # to get file system encoding

from psychopy.hardware import keyboard



# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)

# Store info about the experiment session
psychopyVersion = '2020.1.2'
expName = 'dual-d-detection'  # from the Builder filename that created this script
expInfo = {'participant': '', 'session': '001'}
dlg = gui.DlgFromDict(dictionary=expInfo, sortKeys=False, title=expName)
if dlg.OK == False:
    core.quit()  # user pressed cancel
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName
expInfo['psychopyVersion'] = psychopyVersion

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath='/home/matteo/psychopy_local/dual-d-detection/dual-d-detection.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
# save a log file for detail verbose info
logFile = logging.LogFile(filename+'.log', level=logging.EXP)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file

endExpNow = False  # flag for 'escape' or other condition => quit the exp
frameTolerance = 0.001  # how close to onset before 'same' frame

# Start Code - component code to be run before the window creation

# Setup the Window
win = visual.Window(
    size=[3840, 2160], fullscr=True, screen=0, 
    winType='pyglet', allowGUI=False, allowStencil=False,
    monitor='testMonitor', color=[0,0,0], colorSpace='rgb',
    blendMode='avg', useFBO=True, 
    units='pix')
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess

# create a default keyboard (e.g. to check for escape)
defaultKeyboard = keyboard.Keyboard()

# Initialize components for Routine "intro"
introClock = core.Clock()
instructions = visual.TextStim(win=win, name='instructions',
    text='Press any key to begin the experiment.',
    font='Arial',
    units='pix', pos=(0, 0), height=1.0, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
ready = keyboard.Keyboard()

# Initialize components for Routine "filler"
fillerClock = core.Clock()
placeholder = visual.Polygon(
    win=win, name='placeholder',units='height', 
    edges=8, size=(0.00001, 0.0001),
    ori=0, pos=(1, 1),
    lineWidth=2, lineColor=[-0.004,-0.004,-0.004], lineColorSpace='rgb',
    fillColor=[-0.004,-0.004,-0.004], fillColorSpace='rgb',
    opacity=0, depth=0.0, interpolate=True)

# Initialize components for Routine "screen_scale"
screen_scaleClock = core.Clock()
oldt=0
x_size=8.560
y_size=5.398
screen_height=0

if win.units=='norm':
    x_scale=.05
    y_scale=.1
    dbase = .0001
    unittext=' norm units'
    vsize=2
elif win.units=='pix':
    x_scale=60
    y_scale=40
    dbase = .1
    unittext=' pixels'
    vsize=win.size[1]
else:
    x_scale=.05
    y_scale=.05
    dbase = .0001
    unittext=' height units'
    vsize=1
text_top = visual.TextStim(win=win, name='text_top',
    text='Resize this image to match the size of a credit card\nUp arrow for taller\nDown arrow for shorter\nLeft arrow for narrower\nRight arrow for wider',
    font='Arial',
    units='norm', pos=(0, .7), height=0.1, wrapWidth=1.5, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);
text_bottom = visual.TextStim(win=win, name='text_bottom',
    text='Press the space bar when done',
    font='Arial',
    units='norm', pos=(0, -.6), height=0.1, wrapWidth=1.5, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-2.0);
ccimage = visual.ImageStim(
    win=win,
    name='ccimage', 
    image='bank-1300155_640.png', mask=None,
    ori=0, pos=(0, 0), size=(x_size*x_scale, y_size*y_scale),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-3.0)

# Initialize components for Routine "ready_go"
ready_goClock = core.Clock()
instructions_2 = visual.TextStim(win=win, name='instructions_2',
    text='put instructions here',
    font='Arial',
    units='height', pos=(0, 0), height=0.03, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
ready_2 = keyboard.Keyboard()

# Initialize components for Routine "trial"
trialClock = core.Clock()
N1path = 'meh'
N2path = 'meh' 
Tpath  = 'meh'
fixation = visual.ShapeStim(
    win=win, name='fixation', vertices='cross',
    size=[1.0, 1.0],
    ori=0, pos=(0, 0),
    lineWidth=1, lineColor=[-1.000,-1.000,-1.000], lineColorSpace='rgb',
    fillColor=[-1.000,-1.000,-1.000], fillColorSpace='rgb',
    opacity=1, depth=-1.0, interpolate=True)
noise1 = visual.ImageStim(
    win=win,
    name='noise1', 
    image='sin', mask=None,
    ori=0, pos=(0, 0), size=1.0,
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-2.0)
test_stimulus = visual.ImageStim(
    win=win,
    name='test_stimulus', 
    image='sin', mask=None,
    ori=0, pos=(0, 0), size=1.0,
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-3.0)
noise2 = visual.ImageStim(
    win=win,
    name='noise2', 
    image='sin', mask=None,
    ori=0, pos=(0, 0), size=1.0,
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-4.0)
key_resp = keyboard.Keyboard()
decision_order_0 = visual.TextStim(win=win, name='decision_order_0',
    text='1',
    font='Arial',
    pos=[0,0], height=1.0, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-6.0);

# Initialize components for Routine "branch"
branchClock = core.Clock()
placeholder_4 = visual.Polygon(
    win=win, name='placeholder_4',units='height', 
    edges=8, size=(0.00001, 0.0001),
    ori=0, pos=(1, 1),
    lineWidth=2, lineColor=[-0.004,-0.004,-0.004], lineColorSpace='rgb',
    fillColor=[-0.004,-0.004,-0.004], fillColorSpace='rgb',
    opacity=0, depth=0.0, interpolate=True)
corrD1 = 0
wrongD1 = 0

# Initialize components for Routine "d2_correct"
d2_correctClock = core.Clock()
fixation_2 = visual.ShapeStim(
    win=win, name='fixation_2', vertices='cross',
    size=[1.0, 1.0],
    ori=0, pos=(0, 0),
    lineWidth=1, lineColor=[-1.000,-1.000,-1.000], lineColorSpace='rgb',
    fillColor=[-1.000,-1.000,-1.000], fillColorSpace='rgb',
    opacity=1, depth=-1.0, interpolate=True)
noise1_2 = visual.ImageStim(
    win=win,
    name='noise1_2', 
    image='sin', mask=None,
    ori=0, pos=(0, 0), size=1.0,
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-2.0)
test_stimulus_2 = visual.ImageStim(
    win=win,
    name='test_stimulus_2', 
    image='sin', mask=None,
    ori=0, pos=(0, 0), size=1.0,
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-3.0)
noise2_2 = visual.ImageStim(
    win=win,
    name='noise2_2', 
    image='sin', mask=None,
    ori=0, pos=(0, 0), size=1.0,
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-4.0)
key_resp_corrD1 = keyboard.Keyboard()
decision_order_2 = visual.TextStim(win=win, name='decision_order_2',
    text='2',
    font='Arial',
    pos=[0,0], height=1.0, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-6.0);

# Initialize components for Routine "d2_wrong"
d2_wrongClock = core.Clock()
fixation_3 = visual.ShapeStim(
    win=win, name='fixation_3', vertices='cross',
    size=[1.0, 1.0],
    ori=0, pos=(0, 0),
    lineWidth=1, lineColor=[-1.000,-1.000,-1.000], lineColorSpace='rgb',
    fillColor=[-1.000,-1.000,-1.000], fillColorSpace='rgb',
    opacity=1, depth=-1.0, interpolate=True)
noise1_3 = visual.ImageStim(
    win=win,
    name='noise1_3', 
    image='sin', mask=None,
    ori=0, pos=(0, 0), size=1.0,
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-2.0)
test_stimulus_3 = visual.ImageStim(
    win=win,
    name='test_stimulus_3', 
    image='sin', mask=None,
    ori=0, pos=(0, 0), size=1.0,
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-3.0)
noise2_3 = visual.ImageStim(
    win=win,
    name='noise2_3', 
    image='sin', mask=None,
    ori=0, pos=(0, 0), size=1.0,
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-4.0)
key_resp_wrongD1 = keyboard.Keyboard()
decision_order = visual.TextStim(win=win, name='decision_order',
    text='2',
    font='Arial',
    pos=[0,0], height=1.0, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-6.0);

# Initialize components for Routine "feedback_3"
feedback_3Clock = core.Clock()
msg='doh!'#if this comes up we forgot to update the msg!
feedback_text = visual.TextStim(win=win, name='feedback_text',
    text='default text',
    font='Arial',
    pos=(0, 0), height=1.0, wrapWidth=None, ori=0, 
    color=[-1.000,-1.000,-1.000], colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);

# Initialize components for Routine "adjust_contrast"
adjust_contrastClock = core.Clock()
contrast_lvl = 6
acc_current = 0.7
pause = visual.TextStim(win=win, name='pause',
    text='Need a break?\n\nPress any key to continue.',
    font='Arial',
    pos=(0, 0), height=1.0, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);
press_continue = keyboard.Keyboard()

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.CountdownTimer()  # to track time remaining of each (non-slip) routine 

# ------Prepare to start Routine "intro"-------
continueRoutine = True
# update component parameters for each repeat
instructions.setHeight(0.5*y_scale)
ready.keys = []
ready.rt = []
_ready_allKeys = []
# keep track of which components have finished
introComponents = [instructions, ready]
for thisComponent in introComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
introClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "intro"-------
while continueRoutine:
    # get current time
    t = introClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=introClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *instructions* updates
    if instructions.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instructions.frameNStart = frameN  # exact frame index
        instructions.tStart = t  # local t and not account for scr refresh
        instructions.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instructions, 'tStartRefresh')  # time at next scr refresh
        instructions.setAutoDraw(True)
    
    # *ready* updates
    waitOnFlip = False
    if ready.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        ready.frameNStart = frameN  # exact frame index
        ready.tStart = t  # local t and not account for scr refresh
        ready.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(ready, 'tStartRefresh')  # time at next scr refresh
        ready.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(ready.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(ready.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if ready.status == STARTED and not waitOnFlip:
        theseKeys = ready.getKeys(keyList=None, waitRelease=False)
        _ready_allKeys.extend(theseKeys)
        if len(_ready_allKeys):
            ready.keys = _ready_allKeys[-1].name  # just the last key pressed
            ready.rt = _ready_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in introComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "intro"-------
for thisComponent in introComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('instructions.started', instructions.tStartRefresh)
thisExp.addData('instructions.stopped', instructions.tStopRefresh)
# check responses
if ready.keys in ['', [], None]:  # No response was made
    ready.keys = None
thisExp.addData('ready.keys',ready.keys)
if ready.keys != None:  # we had a response
    thisExp.addData('ready.rt', ready.rt)
thisExp.addData('ready.started', ready.tStartRefresh)
thisExp.addData('ready.stopped', ready.tStopRefresh)
thisExp.nextEntry()
# the Routine "intro" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "filler"-------
continueRoutine = True
routineTimer.add(0.200000)
# update component parameters for each repeat
# keep track of which components have finished
fillerComponents = [placeholder]
for thisComponent in fillerComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
fillerClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "filler"-------
while continueRoutine and routineTimer.getTime() > 0:
    # get current time
    t = fillerClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=fillerClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *placeholder* updates
    if placeholder.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
        # keep track of start time/frame for later
        placeholder.frameNStart = frameN  # exact frame index
        placeholder.tStart = t  # local t and not account for scr refresh
        placeholder.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(placeholder, 'tStartRefresh')  # time at next scr refresh
        placeholder.setAutoDraw(True)
    if placeholder.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > placeholder.tStartRefresh + 0.2-frameTolerance:
            # keep track of stop time/frame for later
            placeholder.tStop = t  # not accounting for scr refresh
            placeholder.frameNStop = frameN  # exact frame index
            win.timeOnFlip(placeholder, 'tStopRefresh')  # time at next scr refresh
            placeholder.setAutoDraw(False)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in fillerComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "filler"-------
for thisComponent in fillerComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('placeholder.started', placeholder.tStartRefresh)
thisExp.addData('placeholder.stopped', placeholder.tStopRefresh)

# ------Prepare to start Routine "screen_scale"-------
continueRoutine = True
# update component parameters for each repeat
# keep track of which components have finished
screen_scaleComponents = [text_top, text_bottom, ccimage]
for thisComponent in screen_scaleComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
screen_scaleClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "screen_scale"-------
while continueRoutine:
    # get current time
    t = screen_scaleClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=screen_scaleClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    keys=event.getKeys()
    
    if len(keys):
        if t-oldt<.5:
            dscale=5*dbase
            oldt=t
        else:
            dscale=dbase
            oldt=t
        if 'space' in keys:
            continueRoutine=False
        elif 'up' in keys:
            y_scale=round((y_scale+dscale)*10000)/10000
        elif 'down' in keys:
            y_scale=round((y_scale-dscale)*10000)/10000
        elif 'left' in keys:
            x_scale=round((x_scale-dscale)*10000)/10000
        elif 'right' in keys:
            x_scale=round((x_scale+dscale)*10000)/10000
        screen_height=round(vsize*10/y_scale)/10
        text_bottom.text='X Scale = '+str(x_scale)+unittext+' per cm, Y Scale = '+str(y_scale)+unittext+' per cm\nScreen height = '+str(screen_height)+' cm\n\nPress the space bar when done'
        ccimage.size=[x_size*x_scale, y_size*y_scale]
        
    
    # *text_top* updates
    if text_top.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_top.frameNStart = frameN  # exact frame index
        text_top.tStart = t  # local t and not account for scr refresh
        text_top.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_top, 'tStartRefresh')  # time at next scr refresh
        text_top.setAutoDraw(True)
    
    # *text_bottom* updates
    if text_bottom.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_bottom.frameNStart = frameN  # exact frame index
        text_bottom.tStart = t  # local t and not account for scr refresh
        text_bottom.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_bottom, 'tStartRefresh')  # time at next scr refresh
        text_bottom.setAutoDraw(True)
    
    # *ccimage* updates
    if ccimage.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        ccimage.frameNStart = frameN  # exact frame index
        ccimage.tStart = t  # local t and not account for scr refresh
        ccimage.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(ccimage, 'tStartRefresh')  # time at next scr refresh
        ccimage.setAutoDraw(True)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in screen_scaleComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "screen_scale"-------
for thisComponent in screen_scaleComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('X Scale',x_scale)
thisExp.addData('Y Scale',y_scale)

thisExp.addData('ccimage.started', ccimage.tStartRefresh)
thisExp.addData('ccimage.stopped', ccimage.tStopRefresh)
# the Routine "screen_scale" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "ready_go"-------
continueRoutine = True
# update component parameters for each repeat
ready_2.keys = []
ready_2.rt = []
_ready_2_allKeys = []
# keep track of which components have finished
ready_goComponents = [instructions_2, ready_2]
for thisComponent in ready_goComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
ready_goClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "ready_go"-------
while continueRoutine:
    # get current time
    t = ready_goClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=ready_goClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *instructions_2* updates
    if instructions_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instructions_2.frameNStart = frameN  # exact frame index
        instructions_2.tStart = t  # local t and not account for scr refresh
        instructions_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instructions_2, 'tStartRefresh')  # time at next scr refresh
        instructions_2.setAutoDraw(True)
    
    # *ready_2* updates
    waitOnFlip = False
    if ready_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        ready_2.frameNStart = frameN  # exact frame index
        ready_2.tStart = t  # local t and not account for scr refresh
        ready_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(ready_2, 'tStartRefresh')  # time at next scr refresh
        ready_2.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(ready_2.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(ready_2.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if ready_2.status == STARTED and not waitOnFlip:
        theseKeys = ready_2.getKeys(keyList=None, waitRelease=False)
        _ready_2_allKeys.extend(theseKeys)
        if len(_ready_2_allKeys):
            ready_2.keys = _ready_2_allKeys[-1].name  # just the last key pressed
            ready_2.rt = _ready_2_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in ready_goComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "ready_go"-------
for thisComponent in ready_goComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('instructions_2.started', instructions_2.tStartRefresh)
thisExp.addData('instructions_2.stopped', instructions_2.tStopRefresh)
# check responses
if ready_2.keys in ['', [], None]:  # No response was made
    ready_2.keys = None
thisExp.addData('ready_2.keys',ready_2.keys)
if ready_2.keys != None:  # we had a response
    thisExp.addData('ready_2.rt', ready_2.rt)
thisExp.addData('ready_2.started', ready_2.tStartRefresh)
thisExp.addData('ready_2.stopped', ready_2.tStopRefresh)
thisExp.nextEntry()
# the Routine "ready_go" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
trials_2 = data.TrialHandler(nReps=3, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=[None],
    seed=None, name='trials_2')
thisExp.addLoop(trials_2)  # add the loop to the experiment
thisTrial_2 = trials_2.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTrial_2.rgb)
if thisTrial_2 != None:
    for paramName in thisTrial_2:
        exec('{} = thisTrial_2[paramName]'.format(paramName))

for thisTrial_2 in trials_2:
    currentLoop = trials_2
    # abbreviate parameter names if possible (e.g. rgb = thisTrial_2.rgb)
    if thisTrial_2 != None:
        for paramName in thisTrial_2:
            exec('{} = thisTrial_2[paramName]'.format(paramName))
    
    # set up handler to look after randomisation of conditions etc
    trials = data.TrialHandler(nReps=5, method='random', 
        extraInfo=expInfo, originPath=-1,
        trialList=data.importConditions('conditions.csv'),
        seed=None, name='trials')
    thisExp.addLoop(trials)  # add the loop to the experiment
    thisTrial = trials.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
    if thisTrial != None:
        for paramName in thisTrial:
            exec('{} = thisTrial[paramName]'.format(paramName))
    
    for thisTrial in trials:
        currentLoop = trials
        # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
        if thisTrial != None:
            for paramName in thisTrial:
                exec('{} = thisTrial[paramName]'.format(paramName))
        
        # ------Prepare to start Routine "trial"-------
        continueRoutine = True
        # update component parameters for each repeat
        N1path = 'stimuli/N/{number}.bmp'.format(number=np.asscalar(np.random.randint(1,200,size=1)))
        N2path = 'stimuli/N/{number}.bmp'.format(number=np.asscalar(np.random.randint(1,200,size=1)))
        
        # contrast_lvl = 10
        if trialtype=='N':
            Tpath = 'stimuli/N/{number}.bmp'.format(number=np.asscalar(np.random.randint(1,200,size=1)))
        else:
            Tpath = 'stimuli/S/SCS{contrast}/{number}.bmp'.format(contrast=contrast_lvl,number=np.asscalar(np.random.randint(1,20,size=1)))
        fixation.setSize((0.5*x_scale, 0.5*y_scale))
        noise1.setSize((4*x_scale, 4*y_scale))
        noise1.setImage(N1path)
        test_stimulus.setSize((4*x_scale, 4*y_scale))
        test_stimulus.setImage(Tpath )
        noise2.setSize((4*x_scale, 4*y_scale))
        noise2.setImage(N2path)
        key_resp.keys = []
        key_resp.rt = []
        _key_resp_allKeys = []
        decision_order_0.setPos((0, 7*y_scale))
        decision_order_0.setHeight(0.5*y_scale)
        # keep track of which components have finished
        trialComponents = [fixation, noise1, test_stimulus, noise2, key_resp, decision_order_0]
        for thisComponent in trialComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        trialClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "trial"-------
        while continueRoutine:
            # get current time
            t = trialClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=trialClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *fixation* updates
            if fixation.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                fixation.frameNStart = frameN  # exact frame index
                fixation.tStart = t  # local t and not account for scr refresh
                fixation.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(fixation, 'tStartRefresh')  # time at next scr refresh
                fixation.setAutoDraw(True)
            if fixation.status == STARTED:
                # is it time to stop? (based on local clock)
                if tThisFlip > 0.3-frameTolerance:
                    # keep track of stop time/frame for later
                    fixation.tStop = t  # not accounting for scr refresh
                    fixation.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(fixation, 'tStopRefresh')  # time at next scr refresh
                    fixation.setAutoDraw(False)
            
            # *noise1* updates
            if noise1.status == NOT_STARTED and tThisFlip >= 0.6-frameTolerance:
                # keep track of start time/frame for later
                noise1.frameNStart = frameN  # exact frame index
                noise1.tStart = t  # local t and not account for scr refresh
                noise1.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(noise1, 'tStartRefresh')  # time at next scr refresh
                noise1.setAutoDraw(True)
            if noise1.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > noise1.tStartRefresh + 0.1-frameTolerance:
                    # keep track of stop time/frame for later
                    noise1.tStop = t  # not accounting for scr refresh
                    noise1.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(noise1, 'tStopRefresh')  # time at next scr refresh
                    noise1.setAutoDraw(False)
            
            # *test_stimulus* updates
            if test_stimulus.status == NOT_STARTED and tThisFlip >= 0.7-frameTolerance:
                # keep track of start time/frame for later
                test_stimulus.frameNStart = frameN  # exact frame index
                test_stimulus.tStart = t  # local t and not account for scr refresh
                test_stimulus.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(test_stimulus, 'tStartRefresh')  # time at next scr refresh
                test_stimulus.setAutoDraw(True)
            if test_stimulus.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > test_stimulus.tStartRefresh + 0.1-frameTolerance:
                    # keep track of stop time/frame for later
                    test_stimulus.tStop = t  # not accounting for scr refresh
                    test_stimulus.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(test_stimulus, 'tStopRefresh')  # time at next scr refresh
                    test_stimulus.setAutoDraw(False)
            
            # *noise2* updates
            if noise2.status == NOT_STARTED and tThisFlip >= 0.8-frameTolerance:
                # keep track of start time/frame for later
                noise2.frameNStart = frameN  # exact frame index
                noise2.tStart = t  # local t and not account for scr refresh
                noise2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(noise2, 'tStartRefresh')  # time at next scr refresh
                noise2.setAutoDraw(True)
            if noise2.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > noise2.tStartRefresh + 0.1-frameTolerance:
                    # keep track of stop time/frame for later
                    noise2.tStop = t  # not accounting for scr refresh
                    noise2.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(noise2, 'tStopRefresh')  # time at next scr refresh
                    noise2.setAutoDraw(False)
            
            # *key_resp* updates
            waitOnFlip = False
            if key_resp.status == NOT_STARTED and tThisFlip >= 0.9-frameTolerance:
                # keep track of start time/frame for later
                key_resp.frameNStart = frameN  # exact frame index
                key_resp.tStart = t  # local t and not account for scr refresh
                key_resp.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(key_resp, 'tStartRefresh')  # time at next scr refresh
                key_resp.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(key_resp.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(key_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if key_resp.status == STARTED and not waitOnFlip:
                theseKeys = key_resp.getKeys(keyList=['s', 'n'], waitRelease=False)
                _key_resp_allKeys.extend(theseKeys)
                if len(_key_resp_allKeys):
                    key_resp.keys = _key_resp_allKeys[0].name  # just the first key pressed
                    key_resp.rt = _key_resp_allKeys[0].rt
                    # was this correct?
                    if (key_resp.keys == str(cresp)) or (key_resp.keys == cresp):
                        key_resp.corr = 1
                    else:
                        key_resp.corr = 0
                    # a response ends the routine
                    continueRoutine = False
            
            # *decision_order_0* updates
            if decision_order_0.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                decision_order_0.frameNStart = frameN  # exact frame index
                decision_order_0.tStart = t  # local t and not account for scr refresh
                decision_order_0.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(decision_order_0, 'tStartRefresh')  # time at next scr refresh
                decision_order_0.setAutoDraw(True)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in trialComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "trial"-------
        for thisComponent in trialComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        if key_resp.corr == 1:
            corrD1 = 1
            wrongD1 = 0
        else:
            corrD1 = 0
            wrongD1 = 1
        trials.addData('fixation.started', fixation.tStartRefresh)
        trials.addData('fixation.stopped', fixation.tStopRefresh)
        trials.addData('noise1.started', noise1.tStartRefresh)
        trials.addData('noise1.stopped', noise1.tStopRefresh)
        trials.addData('test_stimulus.started', test_stimulus.tStartRefresh)
        trials.addData('test_stimulus.stopped', test_stimulus.tStopRefresh)
        trials.addData('noise2.started', noise2.tStartRefresh)
        trials.addData('noise2.stopped', noise2.tStopRefresh)
        # check responses
        if key_resp.keys in ['', [], None]:  # No response was made
            key_resp.keys = None
            # was no response the correct answer?!
            if str(cresp).lower() == 'none':
               key_resp.corr = 1;  # correct non-response
            else:
               key_resp.corr = 0;  # failed to respond (incorrectly)
        # store data for trials (TrialHandler)
        trials.addData('key_resp.keys',key_resp.keys)
        trials.addData('key_resp.corr', key_resp.corr)
        if key_resp.keys != None:  # we had a response
            trials.addData('key_resp.rt', key_resp.rt)
        trials.addData('key_resp.started', key_resp.tStartRefresh)
        trials.addData('key_resp.stopped', key_resp.tStopRefresh)
        trials.addData('decision_order_0.started', decision_order_0.tStartRefresh)
        trials.addData('decision_order_0.stopped', decision_order_0.tStopRefresh)
        # the Routine "trial" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # ------Prepare to start Routine "branch"-------
        continueRoutine = True
        routineTimer.add(0.400000)
        # update component parameters for each repeat
        # debug
        #print(cresp)
        #print(key_resp.corr)
        
        
        if key_resp.corr == 1:
            corrD1 = 1
            wrongD1 = 0
        else:
            corrD1 = 0
            wrongD1 = 1
        # keep track of which components have finished
        branchComponents = [placeholder_4]
        for thisComponent in branchComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        branchClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "branch"-------
        while continueRoutine and routineTimer.getTime() > 0:
            # get current time
            t = branchClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=branchClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *placeholder_4* updates
            if placeholder_4.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                placeholder_4.frameNStart = frameN  # exact frame index
                placeholder_4.tStart = t  # local t and not account for scr refresh
                placeholder_4.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(placeholder_4, 'tStartRefresh')  # time at next scr refresh
                placeholder_4.setAutoDraw(True)
            if placeholder_4.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > placeholder_4.tStartRefresh + 0.4-frameTolerance:
                    # keep track of stop time/frame for later
                    placeholder_4.tStop = t  # not accounting for scr refresh
                    placeholder_4.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(placeholder_4, 'tStopRefresh')  # time at next scr refresh
                    placeholder_4.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in branchComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "branch"-------
        for thisComponent in branchComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        trials.addData('placeholder_4.started', placeholder_4.tStartRefresh)
        trials.addData('placeholder_4.stopped', placeholder_4.tStopRefresh)
        
        # set up handler to look after randomisation of conditions etc
        correct_D1 = data.TrialHandler(nReps=corrD1, method='random', 
            extraInfo=expInfo, originPath=-1,
            trialList=data.importConditions('conditions.csv', selection='0'),
            seed=None, name='correct_D1')
        thisExp.addLoop(correct_D1)  # add the loop to the experiment
        thisCorrect_D1 = correct_D1.trialList[0]  # so we can initialise stimuli with some values
        # abbreviate parameter names if possible (e.g. rgb = thisCorrect_D1.rgb)
        if thisCorrect_D1 != None:
            for paramName in thisCorrect_D1:
                exec('{} = thisCorrect_D1[paramName]'.format(paramName))
        
        for thisCorrect_D1 in correct_D1:
            currentLoop = correct_D1
            # abbreviate parameter names if possible (e.g. rgb = thisCorrect_D1.rgb)
            if thisCorrect_D1 != None:
                for paramName in thisCorrect_D1:
                    exec('{} = thisCorrect_D1[paramName]'.format(paramName))
            
            # ------Prepare to start Routine "d2_correct"-------
            continueRoutine = True
            # update component parameters for each repeat
            N1path = 'stimuli/N/{number}.bmp'.format(number=np.asscalar(np.random.randint(1,200,size=1)))
            N2path = 'stimuli/N/{number}.bmp'.format(number=np.asscalar(np.random.randint(1,200,size=1)))
            Tpath = 'stimuli/S/SCS{contrast}/{number}.bmp'.format(contrast=contrast_lvl,number=np.asscalar(np.random.randint(1,20,size=1)))
            
            
            fixation_2.setSize((0.5*x_scale, 0.5*y_scale))
            noise1_2.setSize((4*x_scale, 4*y_scale))
            noise1_2.setImage(N1path)
            test_stimulus_2.setSize((4*x_scale, 4*y_scale))
            test_stimulus_2.setImage(Tpath)
            noise2_2.setSize((4*x_scale, 4*y_scale))
            noise2_2.setImage(N2path )
            key_resp_corrD1.keys = []
            key_resp_corrD1.rt = []
            _key_resp_corrD1_allKeys = []
            decision_order_2.setPos((0, 7*y_scale))
            decision_order_2.setHeight(0.5*y_scale)
            # keep track of which components have finished
            d2_correctComponents = [fixation_2, noise1_2, test_stimulus_2, noise2_2, key_resp_corrD1, decision_order_2]
            for thisComponent in d2_correctComponents:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            d2_correctClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
            frameN = -1
            
            # -------Run Routine "d2_correct"-------
            while continueRoutine:
                # get current time
                t = d2_correctClock.getTime()
                tThisFlip = win.getFutureFlipTime(clock=d2_correctClock)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *fixation_2* updates
                if fixation_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    fixation_2.frameNStart = frameN  # exact frame index
                    fixation_2.tStart = t  # local t and not account for scr refresh
                    fixation_2.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(fixation_2, 'tStartRefresh')  # time at next scr refresh
                    fixation_2.setAutoDraw(True)
                if fixation_2.status == STARTED:
                    # is it time to stop? (based on local clock)
                    if tThisFlip > 0.3-frameTolerance:
                        # keep track of stop time/frame for later
                        fixation_2.tStop = t  # not accounting for scr refresh
                        fixation_2.frameNStop = frameN  # exact frame index
                        win.timeOnFlip(fixation_2, 'tStopRefresh')  # time at next scr refresh
                        fixation_2.setAutoDraw(False)
                
                # *noise1_2* updates
                if noise1_2.status == NOT_STARTED and tThisFlip >= 0.6-frameTolerance:
                    # keep track of start time/frame for later
                    noise1_2.frameNStart = frameN  # exact frame index
                    noise1_2.tStart = t  # local t and not account for scr refresh
                    noise1_2.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(noise1_2, 'tStartRefresh')  # time at next scr refresh
                    noise1_2.setAutoDraw(True)
                if noise1_2.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > noise1_2.tStartRefresh + 0.1-frameTolerance:
                        # keep track of stop time/frame for later
                        noise1_2.tStop = t  # not accounting for scr refresh
                        noise1_2.frameNStop = frameN  # exact frame index
                        win.timeOnFlip(noise1_2, 'tStopRefresh')  # time at next scr refresh
                        noise1_2.setAutoDraw(False)
                
                # *test_stimulus_2* updates
                if test_stimulus_2.status == NOT_STARTED and tThisFlip >= 0.7-frameTolerance:
                    # keep track of start time/frame for later
                    test_stimulus_2.frameNStart = frameN  # exact frame index
                    test_stimulus_2.tStart = t  # local t and not account for scr refresh
                    test_stimulus_2.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(test_stimulus_2, 'tStartRefresh')  # time at next scr refresh
                    test_stimulus_2.setAutoDraw(True)
                if test_stimulus_2.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > test_stimulus_2.tStartRefresh + 0.1-frameTolerance:
                        # keep track of stop time/frame for later
                        test_stimulus_2.tStop = t  # not accounting for scr refresh
                        test_stimulus_2.frameNStop = frameN  # exact frame index
                        win.timeOnFlip(test_stimulus_2, 'tStopRefresh')  # time at next scr refresh
                        test_stimulus_2.setAutoDraw(False)
                
                # *noise2_2* updates
                if noise2_2.status == NOT_STARTED and tThisFlip >= 0.8-frameTolerance:
                    # keep track of start time/frame for later
                    noise2_2.frameNStart = frameN  # exact frame index
                    noise2_2.tStart = t  # local t and not account for scr refresh
                    noise2_2.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(noise2_2, 'tStartRefresh')  # time at next scr refresh
                    noise2_2.setAutoDraw(True)
                if noise2_2.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > noise2_2.tStartRefresh + 0.1-frameTolerance:
                        # keep track of stop time/frame for later
                        noise2_2.tStop = t  # not accounting for scr refresh
                        noise2_2.frameNStop = frameN  # exact frame index
                        win.timeOnFlip(noise2_2, 'tStopRefresh')  # time at next scr refresh
                        noise2_2.setAutoDraw(False)
                
                # *key_resp_corrD1* updates
                waitOnFlip = False
                if key_resp_corrD1.status == NOT_STARTED and tThisFlip >= 0.9-frameTolerance:
                    # keep track of start time/frame for later
                    key_resp_corrD1.frameNStart = frameN  # exact frame index
                    key_resp_corrD1.tStart = t  # local t and not account for scr refresh
                    key_resp_corrD1.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(key_resp_corrD1, 'tStartRefresh')  # time at next scr refresh
                    key_resp_corrD1.status = STARTED
                    # keyboard checking is just starting
                    waitOnFlip = True
                    win.callOnFlip(key_resp_corrD1.clock.reset)  # t=0 on next screen flip
                    win.callOnFlip(key_resp_corrD1.clearEvents, eventType='keyboard')  # clear events on next screen flip
                if key_resp_corrD1.status == STARTED and not waitOnFlip:
                    theseKeys = key_resp_corrD1.getKeys(keyList=['s', 'n'], waitRelease=False)
                    _key_resp_corrD1_allKeys.extend(theseKeys)
                    if len(_key_resp_corrD1_allKeys):
                        key_resp_corrD1.keys = _key_resp_corrD1_allKeys[0].name  # just the first key pressed
                        key_resp_corrD1.rt = _key_resp_corrD1_allKeys[0].rt
                        # was this correct?
                        if (key_resp_corrD1.keys == str('s')) or (key_resp_corrD1.keys == 's'):
                            key_resp_corrD1.corr = 1
                        else:
                            key_resp_corrD1.corr = 0
                        # a response ends the routine
                        continueRoutine = False
                
                # *decision_order_2* updates
                if decision_order_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    decision_order_2.frameNStart = frameN  # exact frame index
                    decision_order_2.tStart = t  # local t and not account for scr refresh
                    decision_order_2.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(decision_order_2, 'tStartRefresh')  # time at next scr refresh
                    decision_order_2.setAutoDraw(True)
                
                # check for quit (typically the Esc key)
                if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                    core.quit()
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in d2_correctComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # -------Ending Routine "d2_correct"-------
            for thisComponent in d2_correctComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            correct_D1.addData('fixation_2.started', fixation_2.tStartRefresh)
            correct_D1.addData('fixation_2.stopped', fixation_2.tStopRefresh)
            correct_D1.addData('noise1_2.started', noise1_2.tStartRefresh)
            correct_D1.addData('noise1_2.stopped', noise1_2.tStopRefresh)
            correct_D1.addData('test_stimulus_2.started', test_stimulus_2.tStartRefresh)
            correct_D1.addData('test_stimulus_2.stopped', test_stimulus_2.tStopRefresh)
            correct_D1.addData('noise2_2.started', noise2_2.tStartRefresh)
            correct_D1.addData('noise2_2.stopped', noise2_2.tStopRefresh)
            # check responses
            if key_resp_corrD1.keys in ['', [], None]:  # No response was made
                key_resp_corrD1.keys = None
                # was no response the correct answer?!
                if str('s').lower() == 'none':
                   key_resp_corrD1.corr = 1;  # correct non-response
                else:
                   key_resp_corrD1.corr = 0;  # failed to respond (incorrectly)
            # store data for correct_D1 (TrialHandler)
            correct_D1.addData('key_resp_corrD1.keys',key_resp_corrD1.keys)
            correct_D1.addData('key_resp_corrD1.corr', key_resp_corrD1.corr)
            if key_resp_corrD1.keys != None:  # we had a response
                correct_D1.addData('key_resp_corrD1.rt', key_resp_corrD1.rt)
            correct_D1.addData('key_resp_corrD1.started', key_resp_corrD1.tStartRefresh)
            correct_D1.addData('key_resp_corrD1.stopped', key_resp_corrD1.tStopRefresh)
            correct_D1.addData('decision_order_2.started', decision_order_2.tStartRefresh)
            correct_D1.addData('decision_order_2.stopped', decision_order_2.tStopRefresh)
            # the Routine "d2_correct" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
        # completed corrD1 repeats of 'correct_D1'
        
        
        # set up handler to look after randomisation of conditions etc
        wrong_D1 = data.TrialHandler(nReps=wrongD1, method='random', 
            extraInfo=expInfo, originPath=-1,
            trialList=data.importConditions('conditions.csv', selection='1'),
            seed=None, name='wrong_D1')
        thisExp.addLoop(wrong_D1)  # add the loop to the experiment
        thisWrong_D1 = wrong_D1.trialList[0]  # so we can initialise stimuli with some values
        # abbreviate parameter names if possible (e.g. rgb = thisWrong_D1.rgb)
        if thisWrong_D1 != None:
            for paramName in thisWrong_D1:
                exec('{} = thisWrong_D1[paramName]'.format(paramName))
        
        for thisWrong_D1 in wrong_D1:
            currentLoop = wrong_D1
            # abbreviate parameter names if possible (e.g. rgb = thisWrong_D1.rgb)
            if thisWrong_D1 != None:
                for paramName in thisWrong_D1:
                    exec('{} = thisWrong_D1[paramName]'.format(paramName))
            
            # ------Prepare to start Routine "d2_wrong"-------
            continueRoutine = True
            # update component parameters for each repeat
            N1path = 'stimuli/N/{number}.bmp'.format(number=np.asscalar(np.random.randint(1,200,size=1)))
            N2path = 'stimuli/N/{number}.bmp'.format(number=np.asscalar(np.random.randint(1,200,size=1)))
            Tpath = 'stimuli/N/{number}.bmp'.format(number=np.asscalar(np.random.randint(1,200,size=1)))
            
            
            fixation_3.setSize((0.5*x_scale, 0.5*y_scale))
            noise1_3.setSize((4*x_scale, 4*y_scale))
            noise1_3.setImage(N1path )
            test_stimulus_3.setSize((4*x_scale, 4*y_scale))
            test_stimulus_3.setImage(Tpath)
            noise2_3.setSize((4*x_scale, 4*y_scale))
            noise2_3.setImage(N2path )
            key_resp_wrongD1.keys = []
            key_resp_wrongD1.rt = []
            _key_resp_wrongD1_allKeys = []
            decision_order.setPos((0, 7*y_scale))
            decision_order.setHeight(0.5*y_scale)
            # keep track of which components have finished
            d2_wrongComponents = [fixation_3, noise1_3, test_stimulus_3, noise2_3, key_resp_wrongD1, decision_order]
            for thisComponent in d2_wrongComponents:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            d2_wrongClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
            frameN = -1
            
            # -------Run Routine "d2_wrong"-------
            while continueRoutine:
                # get current time
                t = d2_wrongClock.getTime()
                tThisFlip = win.getFutureFlipTime(clock=d2_wrongClock)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *fixation_3* updates
                if fixation_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    fixation_3.frameNStart = frameN  # exact frame index
                    fixation_3.tStart = t  # local t and not account for scr refresh
                    fixation_3.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(fixation_3, 'tStartRefresh')  # time at next scr refresh
                    fixation_3.setAutoDraw(True)
                if fixation_3.status == STARTED:
                    # is it time to stop? (based on local clock)
                    if tThisFlip > 0.3-frameTolerance:
                        # keep track of stop time/frame for later
                        fixation_3.tStop = t  # not accounting for scr refresh
                        fixation_3.frameNStop = frameN  # exact frame index
                        win.timeOnFlip(fixation_3, 'tStopRefresh')  # time at next scr refresh
                        fixation_3.setAutoDraw(False)
                
                # *noise1_3* updates
                if noise1_3.status == NOT_STARTED and tThisFlip >= 0.6-frameTolerance:
                    # keep track of start time/frame for later
                    noise1_3.frameNStart = frameN  # exact frame index
                    noise1_3.tStart = t  # local t and not account for scr refresh
                    noise1_3.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(noise1_3, 'tStartRefresh')  # time at next scr refresh
                    noise1_3.setAutoDraw(True)
                if noise1_3.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > noise1_3.tStartRefresh + 0.1-frameTolerance:
                        # keep track of stop time/frame for later
                        noise1_3.tStop = t  # not accounting for scr refresh
                        noise1_3.frameNStop = frameN  # exact frame index
                        win.timeOnFlip(noise1_3, 'tStopRefresh')  # time at next scr refresh
                        noise1_3.setAutoDraw(False)
                
                # *test_stimulus_3* updates
                if test_stimulus_3.status == NOT_STARTED and tThisFlip >= 0.7-frameTolerance:
                    # keep track of start time/frame for later
                    test_stimulus_3.frameNStart = frameN  # exact frame index
                    test_stimulus_3.tStart = t  # local t and not account for scr refresh
                    test_stimulus_3.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(test_stimulus_3, 'tStartRefresh')  # time at next scr refresh
                    test_stimulus_3.setAutoDraw(True)
                if test_stimulus_3.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > test_stimulus_3.tStartRefresh + 0.1-frameTolerance:
                        # keep track of stop time/frame for later
                        test_stimulus_3.tStop = t  # not accounting for scr refresh
                        test_stimulus_3.frameNStop = frameN  # exact frame index
                        win.timeOnFlip(test_stimulus_3, 'tStopRefresh')  # time at next scr refresh
                        test_stimulus_3.setAutoDraw(False)
                
                # *noise2_3* updates
                if noise2_3.status == NOT_STARTED and tThisFlip >= 0.8-frameTolerance:
                    # keep track of start time/frame for later
                    noise2_3.frameNStart = frameN  # exact frame index
                    noise2_3.tStart = t  # local t and not account for scr refresh
                    noise2_3.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(noise2_3, 'tStartRefresh')  # time at next scr refresh
                    noise2_3.setAutoDraw(True)
                if noise2_3.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > noise2_3.tStartRefresh + 0.1-frameTolerance:
                        # keep track of stop time/frame for later
                        noise2_3.tStop = t  # not accounting for scr refresh
                        noise2_3.frameNStop = frameN  # exact frame index
                        win.timeOnFlip(noise2_3, 'tStopRefresh')  # time at next scr refresh
                        noise2_3.setAutoDraw(False)
                
                # *key_resp_wrongD1* updates
                waitOnFlip = False
                if key_resp_wrongD1.status == NOT_STARTED and tThisFlip >= 0.9-frameTolerance:
                    # keep track of start time/frame for later
                    key_resp_wrongD1.frameNStart = frameN  # exact frame index
                    key_resp_wrongD1.tStart = t  # local t and not account for scr refresh
                    key_resp_wrongD1.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(key_resp_wrongD1, 'tStartRefresh')  # time at next scr refresh
                    key_resp_wrongD1.status = STARTED
                    # keyboard checking is just starting
                    waitOnFlip = True
                    win.callOnFlip(key_resp_wrongD1.clock.reset)  # t=0 on next screen flip
                    win.callOnFlip(key_resp_wrongD1.clearEvents, eventType='keyboard')  # clear events on next screen flip
                if key_resp_wrongD1.status == STARTED and not waitOnFlip:
                    theseKeys = key_resp_wrongD1.getKeys(keyList=['s', 'n'], waitRelease=False)
                    _key_resp_wrongD1_allKeys.extend(theseKeys)
                    if len(_key_resp_wrongD1_allKeys):
                        key_resp_wrongD1.keys = _key_resp_wrongD1_allKeys[0].name  # just the first key pressed
                        key_resp_wrongD1.rt = _key_resp_wrongD1_allKeys[0].rt
                        # was this correct?
                        if (key_resp_wrongD1.keys == str('n')) or (key_resp_wrongD1.keys == 'n'):
                            key_resp_wrongD1.corr = 1
                        else:
                            key_resp_wrongD1.corr = 0
                        # a response ends the routine
                        continueRoutine = False
                
                # *decision_order* updates
                if decision_order.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    decision_order.frameNStart = frameN  # exact frame index
                    decision_order.tStart = t  # local t and not account for scr refresh
                    decision_order.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(decision_order, 'tStartRefresh')  # time at next scr refresh
                    decision_order.setAutoDraw(True)
                
                # check for quit (typically the Esc key)
                if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                    core.quit()
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in d2_wrongComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # -------Ending Routine "d2_wrong"-------
            for thisComponent in d2_wrongComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            wrong_D1.addData('fixation_3.started', fixation_3.tStartRefresh)
            wrong_D1.addData('fixation_3.stopped', fixation_3.tStopRefresh)
            wrong_D1.addData('noise1_3.started', noise1_3.tStartRefresh)
            wrong_D1.addData('noise1_3.stopped', noise1_3.tStopRefresh)
            wrong_D1.addData('test_stimulus_3.started', test_stimulus_3.tStartRefresh)
            wrong_D1.addData('test_stimulus_3.stopped', test_stimulus_3.tStopRefresh)
            wrong_D1.addData('noise2_3.started', noise2_3.tStartRefresh)
            wrong_D1.addData('noise2_3.stopped', noise2_3.tStopRefresh)
            # check responses
            if key_resp_wrongD1.keys in ['', [], None]:  # No response was made
                key_resp_wrongD1.keys = None
                # was no response the correct answer?!
                if str('n').lower() == 'none':
                   key_resp_wrongD1.corr = 1;  # correct non-response
                else:
                   key_resp_wrongD1.corr = 0;  # failed to respond (incorrectly)
            # store data for wrong_D1 (TrialHandler)
            wrong_D1.addData('key_resp_wrongD1.keys',key_resp_wrongD1.keys)
            wrong_D1.addData('key_resp_wrongD1.corr', key_resp_wrongD1.corr)
            if key_resp_wrongD1.keys != None:  # we had a response
                wrong_D1.addData('key_resp_wrongD1.rt', key_resp_wrongD1.rt)
            wrong_D1.addData('key_resp_wrongD1.started', key_resp_wrongD1.tStartRefresh)
            wrong_D1.addData('key_resp_wrongD1.stopped', key_resp_wrongD1.tStopRefresh)
            wrong_D1.addData('decision_order.started', decision_order.tStartRefresh)
            wrong_D1.addData('decision_order.stopped', decision_order.tStopRefresh)
            # the Routine "d2_wrong" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
        # completed wrongD1 repeats of 'wrong_D1'
        
        
        # ------Prepare to start Routine "feedback_3"-------
        continueRoutine = True
        routineTimer.add(0.400000)
        # update component parameters for each repeat
        if key_resp.corr == 1:
            if key_resp_corrD1.corr== 1 :
                msg="Your 2nd decision was correct"
            else:
                msg="Your 2nd decision was wrong"
        else:
            if key_resp_wrongD1.corr== 1:
                msg="Your 2nd decision was correct"
            else:
                msg="Your 2nd decision was wrong"
        feedback_text.setText(msg)
        feedback_text.setHeight(0.5*y_scale)
        # keep track of which components have finished
        feedback_3Components = [feedback_text]
        for thisComponent in feedback_3Components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        feedback_3Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "feedback_3"-------
        while continueRoutine and routineTimer.getTime() > 0:
            # get current time
            t = feedback_3Clock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=feedback_3Clock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *feedback_text* updates
            if feedback_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                feedback_text.frameNStart = frameN  # exact frame index
                feedback_text.tStart = t  # local t and not account for scr refresh
                feedback_text.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(feedback_text, 'tStartRefresh')  # time at next scr refresh
                feedback_text.setAutoDraw(True)
            if feedback_text.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > feedback_text.tStartRefresh + 0.4-frameTolerance:
                    # keep track of stop time/frame for later
                    feedback_text.tStop = t  # not accounting for scr refresh
                    feedback_text.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(feedback_text, 'tStopRefresh')  # time at next scr refresh
                    feedback_text.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in feedback_3Components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "feedback_3"-------
        for thisComponent in feedback_3Components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        trials.addData('feedback_text.started', feedback_text.tStartRefresh)
        trials.addData('feedback_text.stopped', feedback_text.tStopRefresh)
        thisExp.nextEntry()
        
    # completed 5 repeats of 'trials'
    
    
    # ------Prepare to start Routine "adjust_contrast"-------
    continueRoutine = True
    # update component parameters for each repeat
    # numpy array storing whether each response was correct (1) or not (0)
    acc_current = trials.data['key_resp.corr']
    acc_current = np.average(acc_current[-10:])
    
    if acc_current > 0.75:
        contrast_lvl = contrast_lvl - 1
    
    if acc_current < 0.65:
        contrast_lvl = contrast_lvl + 1
    
    
    # boundaries
    if contrast_lvl < 1:
        contrast_lvl = 1
    
    if contrast_lvl>10:
        contrast_lvl=10
    pause.setHeight(0.5*y_scale)
    press_continue.keys = []
    press_continue.rt = []
    _press_continue_allKeys = []
    # keep track of which components have finished
    adjust_contrastComponents = [pause, press_continue]
    for thisComponent in adjust_contrastComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    adjust_contrastClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "adjust_contrast"-------
    while continueRoutine:
        # get current time
        t = adjust_contrastClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=adjust_contrastClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *pause* updates
        if pause.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            pause.frameNStart = frameN  # exact frame index
            pause.tStart = t  # local t and not account for scr refresh
            pause.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(pause, 'tStartRefresh')  # time at next scr refresh
            pause.setAutoDraw(True)
        
        # *press_continue* updates
        waitOnFlip = False
        if press_continue.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            press_continue.frameNStart = frameN  # exact frame index
            press_continue.tStart = t  # local t and not account for scr refresh
            press_continue.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(press_continue, 'tStartRefresh')  # time at next scr refresh
            press_continue.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(press_continue.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(press_continue.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if press_continue.status == STARTED and not waitOnFlip:
            theseKeys = press_continue.getKeys(keyList=None, waitRelease=False)
            _press_continue_allKeys.extend(theseKeys)
            if len(_press_continue_allKeys):
                press_continue.keys = _press_continue_allKeys[-1].name  # just the last key pressed
                press_continue.rt = _press_continue_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in adjust_contrastComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "adjust_contrast"-------
    for thisComponent in adjust_contrastComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    trials_2.addData('pause.started', pause.tStartRefresh)
    trials_2.addData('pause.stopped', pause.tStopRefresh)
    # check responses
    if press_continue.keys in ['', [], None]:  # No response was made
        press_continue.keys = None
    trials_2.addData('press_continue.keys',press_continue.keys)
    if press_continue.keys != None:  # we had a response
        trials_2.addData('press_continue.rt', press_continue.rt)
    trials_2.addData('press_continue.started', press_continue.tStartRefresh)
    trials_2.addData('press_continue.stopped', press_continue.tStopRefresh)
    # the Routine "adjust_contrast" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 3 repeats of 'trials_2'


# Flip one final time so any remaining win.callOnFlip() 
# and win.timeOnFlip() tasks get executed before quitting
win.flip()

# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsWideText(filename+'.csv')
thisExp.saveAsPickle(filename)
logging.flush()
# make sure everything is closed down
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()
