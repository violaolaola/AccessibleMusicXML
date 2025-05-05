# AccessibleMusicXML
HTML designed to parse, sort, and display musicXML scores that are compatible with screen readers. 

Workflow is as follows:
User uploads a musicXML file - code unpacks and tags content - places it in semantic, ARIA tagged HTML tags that follow a logical learning order.

The three channels focus on different parts of a muscial score:

Channel 1:
Notes and overview - contains all data for notes and duration able to be read by screen readers 
  //no svg rendering or output - just raw data as of version 0.5

Channel 2:
Structure - tempo, bars, repeats are contained in here. The rhythm can be extracted from the data contained in the <note> tag. 

Channel 3: 
Interpretation - dynamics, instructions, specific music things

There are barebones gesture and keyboard controls - not sure if this interferes with screen readers.

Testing devices: iOS voiceover, keyboard navigation in Google Chrome.
