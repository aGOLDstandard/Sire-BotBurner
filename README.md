# Sire_Alpha
> If your here, thank you! And welcome to the Sire alpha program!<br/>
---
I have a LOT of code bites from two slightly different build attempts as I've grown over my learning journey. I feel like I'm close enough to start releasing little bits here.<br/>
As of now, this is the "working repo". Starting off slow as there are some bits and pieces to the story, and some comments to myself (I'm brutal at me.) that may need to be<br/>
removed/modified before introduction. Starting up, we have have two folders to straighten out. For now, we'll assume that the "bldwrms" folder is good to go, as it will be<br/>
cruicial for the next "big step" in building Sire, and should be more than functional for that(for now). First, I need to get the current working library in order by separating it<br/>
into smaller libraries, so ~~my ADHD can finally stop having it's aneurism~~ I can create a code base that is easier for me to maintain despite my learning difference :D. This<br/>
can be repacked for simplicity later.<br/>
<br/>

#### /lib
- I've moved the original library file, "sirelib.js", into it's own folder for *unpacking*. As of initial posting, I've only unpacked the text formatting stuff into "textLib.js".<br/>
In order to clean this up before moving on, I need to break the *story stuff* out of the current lib. Eventually I may create a "/diag" subdirectory to handle different premade<br/> 
character lines. For now, The initial to-do list for /lib:<br/>
<br/>
    - [] Move all the extrenuous dialog stuff from BITE subprotocols "SEIGE" and "INFECTION" into a "diagLib.js".
    - [] *Need to add a modular function to textLib that will tprint or print a given string 1 letter at a time, and w/ 'X'ms pause between each addition.*
    - [] Replace all of aforementioned dialog with simple, "more official", console prints and UX stuff (can skip over INFECTION, see below).
    - [] Create a new "wakelib.js" to isolate the whole file transfer mess in INFECTION within sirelib. (Should make this more modular anyways. Designed towards<br/> 
    replicating(TM) an FTP transfer, with file upload verification. We'll call it "Wake-Infection-Protocol" for now (If you just got that, welcome to the team, your<br/> 
    coffee is on your desk, champ! :D )
    - [] Need to make a little js calculator utility for my VS environment to figure up what the in-game RAM will be after making adjustments<br/> 
    (I don't want to use the BitBurner extension, I'm already up to my eyeballs and personally don't need the file pushing stuff)
    - [] IF during the course of building the WIP I think it may be a good idea (which I may) I might end up doing some goofing to the "wake.js" file in /bldwrms.<br/> 
    This is only because networking stuff was my first big "aw wow cool!" in the journey that's brought me here, and I've actually never used ns' networking functions.<br/> 
    I might implement it to "simulate" our "TCP/IP connection" for WIP, but we'll see.