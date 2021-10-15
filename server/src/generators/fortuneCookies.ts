/* eslint-disable quotes */

var tracery = require('tracery-grammar')

export const actionString = (fortune: string) => {
  return `You crack open a fortune cookie! ${fortune}.`
}

export const generate = () => {
  var grammar = tracery.createGrammar({
    origin: [
      '#good# The fortune reads "#goodFortune#"',
      '#good# The fortune reads "#goodFortune#"',
      '#good# The fortune reads "#goodFortune#"',
      '#bad# The fortune reads "#badFortune#"'
    ],
    good: [
      '#ooh#, #tasty#!',
      '#ooh#, #incredible#!',
      '#ooh#, tastes like #goodFlavor#!',
      `It's #tasty.a# cookie #thatsLike# #goodFlavor#.`,
      `It's #incredible.a# cookies #thatsLike# #goodFlavor#.`
    ],
    ooh: [
      'Ooh',
      'Mmm',
      'Ahhhh',
      'Hmm',
      'Hooray',
      'Nice',
      'Wonderful',
      'Delightful'
    ],
    tasty: [ // consonant-tasty; kept these separate so you can't get 'ridiculously ridiculously'
      'tasty',
      'delicious',
      'delightful',
      'scrumptious',
      'decadent',
      'ridiculously #incredible#' // learning from you! -kawa
    ],
    incredible: [ // vowel-tasty
      'incredible',
      'amazing',
      'awesome',
      'excellent',
      'outstanding',
      'unimaginably #tasty#'
    ],
    thatsLike: [
      'that tastes like',
      'with notes of',
      'that reminds you of',
      'that\'s just like'
    ],
    goodFlavor: [
      'apple',
      'banana',
      'almond',
      'peanut butter',
      'walnut',
      'lychee',
      'mango',
      'red bean',
      'vanilla',
      'chocolate',
      'strawberry',
      'matcha',
      'cinnamon',
      'cheesecake',
      'snickerdoodle',
      'gingersnap',
      's\'more',
      'shortbread',
      'tiramisu',
      'lemon',
      'raspberry',
      'honey',
      'birthday cake',
      'caramel',
      'hazelnut',
      'coffee',
      'lavender',
      'pistachio'
    ],
    goodFortune: [
      'Always be aware of the phase of the moon!',
      'Amulets of Yendor are hard to make.  Even for a wand of wishing.',
      'Be careful!  The Wizard may plan an ambush!',
      'Digging up a grave could be a bad idea…',
      'Eat your carrots.  They\'re good for your eyes.',
      'Elbereth has quite a reputation around these parts.',
      'For a good time engrave "Elbereth"',
      'For a good time engrave "Elbereth". Ask for "Jennyreth."', // 8675309
      'I smell a maze of twisty little passages.',
      'If you come upon a maze of twisty little passages, be aware that the MAY not be ALL alike.',
      'I\'m watching you.  -- The Wizard of Yendor',
      'If a hollow voice calls you "Fool", ignore it. You are valid. What do hollow voices know?',
      'Not all boots were made for walking.',
      'Someone once said that #somebodyoncetold#.',
      'The magic marker is mightier than the sword.',
      'There is no harm in praising a large dog.',
      'They say that if you start at the bottom the only place to go is up.',
      'They say that you are what you eat.',
      'They say that you are what you eat. You appear to be several intelligent, attractive people! Cannibal.',
      'Two wrongs don\'t make a right, but three lefts do.',
      'Why do you suppose they call them MAGIC markers?',
      'You may discover a menagerie inside a potion bottle.',
      'The art of mimicry may be learned from the bartender, if you\'re clever.',
      'You might be a Proc Gen Wizard if you believe procedural generation is a set of rules to be studied and mastered.',
      'You might be a Proc Gen Sorcerer if you believe procedural generation is a medium to examine your intuitions.',
      'You might be a Proc Gen Bard if you believe in embracing the strangeness of procedurally generated content.',
      'You might be a Proc Gen Artificer if your passion is in building tools and interfaces for others to explore procedural generation.',
      'You might be a Proc Gen Cleric if rituals are a part of your procedural generation work.',
      'You might be a Proc Gen Warlock if you have argued with your procedural generator.',
      'You might be a Proc Gen Druid if you are proud of your procedural generator\'s growth.',
      'You might be a Proc Gen Ranger if you can guide others on their paths to procedural generation joy.',
      'You might be a Proc Gen Paladin if you are an activist for true understanding of the tools of procedural generation.',
      'You might be a Proc Gen Redneck if you like this format of Proc Gen Joke creation.',
      'They say that fortune cookies are food for thought.',
      'Impress your partners and friends! Bring them an orb!',
      'The real ascension is the friends you make along the way.',
      'Losing is ❗fun❗',
      '!Congratulations! you have !died!',
      'Never turn your back on an elephant.',
      'You found kitten! Good job, robot!',
      'You found kitten on your foot! Touch it? (Y)es, (N)o, No, (B)ut I wanna touch it.',
      '<a href=https://archiveofourown.org/works/5458259 target="_blank">Just because it says READ ME doesn\'t mean you should.</a>',
      'They say the greatest conduct you can follow is <a href=https://roguelike.club/code.html target="_blank">the Code</a>.',
      '<a href=https://www.youtube.com/playlist?list=PLi7jNGNQhwdhKzh2I7NNJTxHjQEVejLxm target="_blank">Check out the videos from 2020!</a>',
      '<a href=http://www.roguelikeradio.com/2020/09/episode-156-roguelike-celebration-event.html target="_blank">Listen to some of the organizers speak to Roguelike Radio!</a>',
      '<a href=https://www.youtube.com/playlist?list=PLi7jNGNQhwdg9M2K3s6W73E0BlWF0qrLY target="_blank">Check out the videos from 2019!</a>',
      '<a href=https://www.youtube.com/watch?v=jviNpRGuCIU&list=PLi7jNGNQhwdisqRtuvX8X8Q2F0TEUgQ5V target="_blank">Check out the videos from 2018!</a>',
      '<a href=https://www.youtube.com/watch?v=wwc7pZqs9UA&list=PLi7jNGNQhwdhiZcp2g4yU7xpXmOqS9VBl target="_blank">Check out the videos from 2017!</a>',
      '<a href=https://www.youtube.com/channel/UCsCqXksJuAkfZRtnW5Pq1mw/videos target="_blank">Check out the videos from 2016!</a>',
      'Thank you once again to <a href=https://whitecoatcaptioning.com/ target="_blank">White Coat Captioning</a>!',
      'Buy a <a href=https://www.aatwebstore.com/rc2021/shop/home target="_blank">t-shirt</a>, designed by <a href=https://marlowedobbe.com/ target="_blank">Marlowe Dobbe</a>!',
      'The beautiful stream overlays are made by <a href=https://christen.carrd.co/ target="_blank">Christen Alqueza</a>!',
      'Crush monsters, THEN get loots',
      'Krong smiles upon you!',
      'Spike pits are best avoided and bad for your health',
      'Always put a bag of holding into another bag of holding. I mean, what could possibly happen? <u>Nothing bad.</u>',
      'Unlike "Snake" you can always go back. Don\'t trust your keyboard\'s auto repeat.',
      'Metaprogression isn\'t permadeath',
      'Always wear the golden dragon armor on D:1',
      'Kick the dust from the stairs - what could go wrong?',
      'You don\'t <em>ever</em> drink unidentified potions... unless you have to.',
      'All-bards may not be the most powerful party composition, but it <em>is</em> the most fun!',
      'Death is just a new beginning!',
      'Metaprogression is FUN!',
      'Metaprogression is FUN! (Restart?)',
      'In terms of procgen practitioner D&D classes, we can contain multitudes.',
      'Your character class is Legion, for you are many.  Maybe multiclass less next time?',
      'Swallow sludge to transform yourself',
      'Procedural cat generation is money on the table.',
      'Add features to solve balance issues.',
      'Live as you play: Randomly.',
      'Live as you play: Restarting over and over until you get a good seed.',
      'The corridor is your friend.',
      'You\'ll be happier if you finish making it!',
      'Every monster you date is a monster you don\'t have to slay.',
      'You are lucky! Full moon tonight.',
      'You are lucky! It\'s a Full Moon on Friday the 43rd! Please submit a bug report!',
      'Lucky you! You have a cookie to eat.',
      'Your luck is glorious, and so use your luck for good!'
    ],
    bad: [
      '#ugh#, #gross#!',
      '#ugh#, #awful#!',
      '#ugh#, tastes like #badFlavor#.',
      '#gross.a.capitalize# cookie #thatsLike# #badFlavor##weirdly#.',
      '#awful.a.capitalize# cookies #thatsLike# #badFlavor##weirdly#.'
    ],
    ugh: [
      'Ugh',
      'Eww',
      'Blergh',
      'Blah',
      'Oh no'
    ],
    gross: [ // consonant-gross
      'bilious',
      'crusty',
      'detestable',
      'disgusting',
      'gross',
      'bizarre',
      'nasty',
      'vile',
      'miserable',
      'foul',
      'grody',
      'gross',
      'gwoss',
      'gruesome',
      'heinous',
      'horrific',
      'lousy',
      'nauseating',
      'nasty',
      'poo-poo',
      'repellent',
      'revolting',
      'smelly',
      'stinky',
      'vile',
      'horribly #awful#'
    ],
    awful: [ // vowel-gross
      'abominable',
      'awful',
      'egregious',
      'icky',
      'odious',
      'unwashed',
      'unpleasant'
    ],
    badFlavor: [ // I alphabetized this one specifically to add more stuff.  But maybe lint everything later? - bengrue
      'a Bauhaus design',
      'a cash grab',
      'an unwashed, rusted 1983 Dodge Omni',
      'Axe Body Spray(tm) of indeterminate flavor',
      'beige',
      'blue',
      'body odor',
      'brutalism',
      'capitalism',
      'cheap catfood (not even the good stuff)',
      'dadaism', // ha, I was going to add this -bengrue
      'deadlines',
      'Dijkstra maps',
      'discourse',
      'electricity',
      'entity component systems',
      'floppy disks',
      'friendship',
      'frustration',
      'fuchsia',
      'gak',
      'green',
      'hot pink',
      'impostor syndrome',
      'lutefisk',
      'meetings',
      'middle-aged spirit',
      'natto',
      'neo-modernism',
      'No-More-Tears baby shampoo',
      'octarine', // nice -bengrue
      'orange',
      'plaid',
      'prequel films',
      'prime numbers',
      'production schedules',
      'prune',
      'purple',
      'red',
      'selling out',
      'shadows',
      'shakespeariansm',
      'social interaction',
      'SPF 800 sunscreen',
      'spikes',
      'spit',
      'spite',
      'stale cigarettes',
      'static',
      'teen spirit',
      'three-day-old fish',
      'the ineffable',
      'the infinite',
      'tween spirit',
      'ugly fractals',
      'uncertainty (maybe?)',
      'unnecessary sequels',
      'violet',
      'wave function collapse',
      'yellow'
    ],
    weirdly: [
      '',
      ', weirdly',
      ', strangely',
      ', as odd as that sounds',
      ', somehow'
    ],
    badFortune: [
      'Be careful when eating bananas. Monsters might slip on the peels.',
      'Does your boss know what you\'re doing right now?',
      'Don\'t tell a soul you found a secret door, otherwise it isn\'t a secret anymore.',
      'If you thought the Wizard was bad, just wait till you meet the Warlord!',
      'If you thought the Warlord was bad, just wait till you meet the Warlady!',
      'Never play leapfrog with a unicorn.', // wow, kudos to whomever wrote this. -BenGrue // it's an original Nethack rumors.fal! -kawa
      'Never trust a random generator in magic fields.',
      'Never trust a random generator when DEATH is on the line!',
      'Ouch. I hate when that happens.',
      'PLEASE ignore the previous rumor.',
      'PLEASE ignore the next rumor.',
      'PLEASE ignore this rumor. I\'m sure its not as bad as it looks.',
      'At least your mother likes you?',
      'Sorry, no fortune this time.  Better luck next cookie!',
      'Suddenly, the dungeon will collapse…',
      'Suddenly, rocks fall.  Please roll 1d20 to see if everyone dies.',
      'Critical Error. (A)bort, (R)etry, (F)ail?',
      'The magic word is "#badmagicword#".',
      'The mines are dark and deep, and I have levels to go before I sleep.',
      'They say that a black pudding is simply a brown pudding gone bad.',
      'They say that a fortune only has 1 line and you can\'t read between it.',
      'They say that a hot dog and a taco are the same thing.',
      'They say your vanilla soy latte is a three bean soup.',
      '#game# is a roguelike.',
      'ASCII, dungeons - by certain interpretations, you\'re playing a roguelike right now!',
      'Is *this* a roguelike?',
      'They say that no one will admit to starting a rumor.',
      'They say that there is no such thing as free advice.',
      'Unfortunately, this message was left intentionally blank.',
      'Warning:  fortune reading can be hazardous to your health.',
      'Yet Another Silly Message (YASM).',
      'You swallowed the fortune!',
      'Do not eat the delicious fortune.',
      'You are Xom\'s most beloved teddy bear. Lucky you...?',
      'nglormp dglflnngr',
      '...In bed. Ha! Beat you to it!',
      'You open the cookie like a pillowcase!!! The cookie suddenly stops moving!',
      'You will likely be crushed under the uncaring foot of capitalism.'
    ],
    badmagicword: [
      'XYZZY',
      'PLUGH',
      'F\'tagn',
      'Avada-Kedavra',
      'UMACTUALLY'
    ],
    game: [
      'Hearts',
      'Gin Rummy',
      'Cribbage',
      'Chess',
      'Rugby',
      'Go Fish',
      'Blaseball',
      'Homestuck',
      'Neopets',
      'Frog Fractions 2',
      'Eve Online',
      'Among Us',
      'Dream Daddy',
      'Super Meat Boy',
      'Overwatch',
      'Fortnite',
      'Calvinball',
      'Real life',
      'Second Life',
      'Parcheesi',
      'Marbles',
      'Final Fantasy VII',
      'Thriving in a pandemic',
      'Splatoon',
      'Quarters',
      'King\'s Cup',
      '"Never Have I Ever"',
      'H.O.R.S.E.',
      'League of Legends',
      'Truth Or Dare',
      'Shuffleboard',
      'Backgammon',
      'Everything Steve Jackson has ever published',
      'Magic: the Gathering',
      'Spelunky 2, but not Spelunky 1',
      'Dungeons & Dragons',
      'Dungeon World',
      'Apocalypse World',
      'Lady Blackbird',
      'Sushi Go! Party',
      'Fiasco',
      'GURPs',
      'Yahtzee',
      'Liar\'s Dice',
      'Darts',
      'Capitalism',
      'Genshin Impact',
      'Chex Quest', // https://en.wikipedia.org/wiki/Chex_Quest
      'Kittens Game',
      'Solitaire'
    ],
    somebodyoncetold: [ // thanks, I hate it -kawa
      'what goes up < might come down >',
      'the world was gonna roll me',
      'you\'re not the sharpest tool in the shed',
      'you were looking kinda dumb with your finger and your thumb in the shape of an "L" on your forehead. Stop doing that.'
    ]
  })

  grammar.addModifiers(tracery.baseEngModifiers)
  return grammar.flatten('#origin#')
}

/* eslint-enable quotes */
