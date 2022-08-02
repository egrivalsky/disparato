# Disparato
### An open source word association tool for joke writers.
<img src="/assets/screen1.png" width="100" height="200">
<img src="/assets/screen2.png" width="100" height="200">
<img src="/assets/screen3.png" width="100" height="200">
<img src="/assets/screen4.png" width="100" height="200">

## Description
A common approach to generating jokes, especially the topical one-liners you might here during a late night monologue, involves:
  1. Finding a news item and selecting two important words from the headline
  2. For each of those two words, generating a list of associated words word and ideas
  3. Finding unexpected commonalities between the two lists\
[More how to use this process from the master](https://joetoplyn.com/how-to-write-a-joke/)

Disparato helps writers with steps two and three.

The Disparato app is written in React Native and uses the [Expo](https://www.expo.dev) wrapper.
The [backend](https://github.com/egrivalsky/disparato-backend) is written in Python using the Django framework. It's a REST API that accesses the wonderful [Datamuse API](https://www.datamuse.com/) to find syntactically related words. It sends and receives JSON to and from this front end.

## Installation
This app was built using [Expo](https://www.expo.dev) and React Native.
To run it locally, clone the repo:
1. `cd disparato`
2. `npm install`
3. `expo start`

## Use
The app is currently [available on the Google Play Store](https://play.google.com/store/apps/details?id=com.erikgrivalsky.disparato)!
Please download it and give it a whirl. I am happy and eager to receive any constructive feedback.

[<img src="/assets/google-play-badge.png" width="119" height="46">](https://play.google.com/store/apps/details?id=com.erikgrivalsky.disparato)

1. Enter two English words you'd like to explore

2. Press 'go', and the app will show related words that those two have in common

3. If nothing shows up, or if you just want more, try 'go deeper.'

   That will find common words separated by one degree.

   In the 'go deeper' list, you can click on a word to see how we came up with it.


## Credits
Datamuse is a very cool and interesting API and this project would be meaningless without them. Thank you very much, [Datamuse](https://www.datamuse.com/).

Maximilian Schwarzmüller has a terrific, comprehensive React Native [course](https://www.udemy.com/course/react-native-the-practical-guide/) that was indispensible in my developing and shipping this project. Thank you, [Maximilian Schwarzmüller](https://twitter.com/maxedapps)!

