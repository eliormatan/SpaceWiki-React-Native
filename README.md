# SpaceWiki

## a.
### Components: 
The app contains two tabs: LaunchesNavigator and FavoritesNavigator.
Each of them has two stack screens: Launches / Favorites and LaunchWebView.
The Launches/Favorites component renders a search bar and LaunchItemList which is a VirtualizedList of LaunchItems.
  
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

The app starts with the Launches screen and displays the first 20 launches from the API, and gets
the favorites from the storage.

The user have 4 options:
1. Click on the heart sign to like / dislike a launch. It will trigger a function (toggleFavoriteId) which will 
   change the state of the favorites and update them in the storage and the UI.

2. Click on an entry of a launch. It will update the state of the wikiURL which will make the app
   navigate to LaunchWebView screen which shows the relevant url for the entry. 
   Then the user can go back by clicking ‘Back’ button on the top.

3. Scroll down to see more launches. If the user reaches the end of the list, 
   new launches will be added to the screen by activating a function(loadData).	
 
4. Search for launches in the search bar.  New list of launches will be shown in the screen depending on the search
   query by activating a function(loadData) using debounce function to reduce search requests.


### Libraries:
* async-storage -saving data(even if the app is closed) asynchronously. Used in this app for the ids of the favorites.
* react-navigation - moving between screens. Used in this app for tab and stack navigators.
* webview - showing web pages in mobile. Used in this app for opening the wiki pages.
* react-native-elements - used for the search bar component in the app.
* react-native-vector-icons/Ionicons - used for the heart Icon in the app.

## b.
As far as I'm aware, there aren't any bugs in the app.

## c.
### improvments:
* build the app so there will be less rerenders
* use external libaries to manage states
* style

### new features:
* sort alphbetical
* login option


## d. 
### most time: 
* Learn about React library and understand its new refreshing concpets (e.g. hooks, states, components…). 
* Debugging with chrome developer tools.

### most difficult:
* Improve the app's performance so it will run more efficiently and there will be less unnecessary re-renders. 
* Installation issues in mac. 

