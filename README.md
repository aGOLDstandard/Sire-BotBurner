# Sire_Alpha
If your here, thank you! And welcome to the Sire alpha program!
<br/><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I have _a lot_ of code bites from two slightly different build attempts as I've grown over my learning journey. I feel like I'm close enough to start releasing little bits here. As of now, this is the "working repo". Starting off slow as there are some bits and pieces to the story, and some comments to myself (I'm brutal at me.) that may need to be removed/modified before introduction. Starting up, we have have two folders to straighten out. For now, we'll assume that the /bldwrms directory is good to go, as it will be cruicial for the next "big step" in building Sire, and should be more than functional for that(for now). First, I need to get the current working library in order by separating it into smaller libraries, so ~~my ADHD can finally stop having it's aneurism~~ I can create a code base that is easier for me to maintain despite my learning difference :D. This can be repacked for simplicity later.<br/><br/>

### /lib
- I've moved the original library file, "sirelib.js", into it's own folder, "/lib" for *unpacking*. As of yet, I've only really unpacked the text formatting function into it's own lib. In order to clean this up before moving on, I need to break the *story stuff* out of sireLib. I have created a "/diag" subdirectory in /lib to handle different premade character lines and specific functions. For now, The initial to-do list for /lib: (_One item removed from list. [^see])<br/><br/>

    - [] Move all the extrenuous dialog stuff from BITE subprotocols "SEIGE" and "INFECTION" into a "diagLib.js".<br/>
    - [] Replace all of aforementioned dialog with simple, "more official", console prints and UX stuff (can skip over INFECTION, see below). <br/>
    - [] Create a new "wakelib.js" to isolate the whole file transfer mess in INFECTION within sirelib. [^1]<br/>
    - [] Need to make a little js calculator utility for my VS environment to figure up what the in-game RAM will be after making adjustments (I don't want to use the BitBurner extension, I'm already up to my eyeballs and personally don't need the file pushing stuff ¯\_(ツ)_/¯)<br/><br/>

### Libs to test:
- Here lie the list of (_current_)individual libs. Most of these will eventually be concatonated into one library script:<br/><br/>
    
    - (see the [Status Icons](#icons) index)<br/><br/>

    - /lib:
        - [] :japanese_ogre: sireLib :japanese_ogre: ( :x: - Sire command/flag handling stuff)<br/>
        - [] :paperclip: textLib :paperclip: ( :white_check_mark: - General text formatting function(s))<br/><br/>

    - /lib/diag:
        - [] :robot: bioSystemsLib :robot: ( :red_circle: - "Official responses" for no-story install mode.)<br/>
        - [] :scroll: squireLib :scroll: ( :red_circle: - "Official responses" for story-mode install.)<br/>
        - [] :duck: quackLegion :duck: ( :name_badge: - 'Seige Ducks' dialog.)<br/>
        - [] :worm: wakeLib :worm: ( :white_check_mark: - 'Wake' dialog and special formatting tools.)<br/>
        - [] :rocket: viperLib :rocket: ( :name_badge: - 'Viper' dialog.)<br/><br/>

<a name="icons">

### Status Icon index:
- Status icons:<br/>
    - :name_badge: = _Unstarted_<br/>
    - :red_circle: = _Untested_<br/>
    - :x: = _Tested as 'Unstable'_<br/>
    - :white_check_mark: = _Tested as 'Stable'_<br/><br/>

- Format:<br/>
    - [] unfinishedLibraryName (state - contents)<br/>
    - [x] finishedLibraryName (contents)<br/><br/>

[^1]: Should make this more modular anyways. Designed towards replicating(TM) an FTP transfer, with file upload verification. We'll call it "Wake-Infection-Protocol" for now (If you just got that, welcome to the team! Your coffee is on your desk, champ! :grin: )

[^see]: If during the course of building the WIP I think it may be a good idea (which I may), I might end up doing some goofing to the "wake.js" file in /bldwrms. This is only because networking stuff was my first big "aw wow cool!" in the journey that's brought me here, and I've actually never used ns' networking functions. I might implement it to "simulate" our "TCP/IP connection" for WIP, but we'll see.