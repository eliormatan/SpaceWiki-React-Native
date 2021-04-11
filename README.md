# SpaceWiki

## a.
### Components: 
```
The app contains two tabs screens: LaunchesNavigator and FavoritesNavigator.
Each of them has two stack screens: Launches / Favorites and LaunchWebView.
The Launches / Favorites component renders a search bar and LaunchItemList which is a VirtualizedList of LaunchItems.
```
  
### Components tree:
```
						  Searchbar 
						 /
					 Launches
		 		  / stack	 \			       
		FavoritesNavigator		  Launchitemlist — Launchitem
	   / tab	          \ stack			       
index - App 			         Webview
	   \ tab                  / stack
		LaunchesNavigator 	          Searchbar
                                  \ stack	 /
					Favorites
						 \			    	
						  Launchitemlist —  Launchitem
```
### Overflow:
```
The app start with the Launches screen and display the first 20 launches from the API, and get the favorites from the storage.
The user have 4 options:
1. Click on the heart sign to like / dislike a launch. It will trigger a function (toggleFavoriteId) which will change the state of the favorites and update them in the storage and the UI.

2. Click on an entry of launch. It will update the state of the wikiURL which will make the stack navigator to navigate to LaunchWebView screen which shows the relevant url of the entry. Then the user can go back by clicking ‘Back’  button on the top.

3. Scroll down to see more launches. If the user reaches to the end of the list, new launches will be added to the screen by activate a function(loadData).	
 
4. Search for launches in the search bar.  New list of launches will be shown in the screen depending on the search query by activate a function(loadData) using debounce function.
```

### Libraries:
```
* async-storage -use to save data(even if the app is close) asynchronously. In this app use for the ids of the favorites.
* react-navigation - use to moving between screens. In this app use for tab and stack navigators.
* webview - use to show web pages in mobile. In this app use for opening the wiki pages.
* react-native-elements - use for the search bar component in the app.
* react-native-vector-icons/Ionicons - use for the heart Icon in the app.
```

## b.
As far as I'm aware, there is no any bugs in the app

## c.
-sort alphbetical?
-try build the architecture so there will be less rerenders
-maybe use external libaries to manage states?
-login option?


## d. 
### most time: 
* Learn about React library and understands it's new refreshing concpets (e.g. hooks, states, components…). 
* Debugging with chrome developer tools.

### most difficult:
* Change the app so the performance will be more efficiently without too many unnecessary re-renders. 
* Installation issues in mac. 

