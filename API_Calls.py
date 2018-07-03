import spotipy.oauth2
import spotipy.util as util
import spotipy.util
import spotipy

import pandas as pd

def refresh():
    global token_info, sp

    if sp_oauth.is_token_expired(token_info):
        token_info = sp_oauth.refresh_access_token(token_info['refresh_token'])
        token = token_info['access_token']
        sp = spotipy.Spotify(auth=token)

class sp_artist_search:

    def sp_search_artist(sp_artist_name):
        ## Takes user name from user input and searches for artist information - returns dataframe
        artist_search_results = sp.search(q = sp_artist_name, limit = 1, type = 'artist')
        artist_search_results_2 = artist_search_results['artists']
        artist_search_results_3 = artist_search_results_2['items']
        sp_search_artists_df = pd.DataFrame(artist_search_results_3)
        return sp_search_artists_df

    artist_search_df = sp_search_artist(input("What artist would you like to see?"))

    ## Collect artist id and genres

    artist_search_id = list(artist_search_df.id)

    artist_search_genre = list(artist_search_df.genres)

class sp_album_search:

    def sp_search_album(sp_artist_id):
        album_search_results = sp.artist_albums(sp_artist_id, album_type = 'album')
        album_search_results_2 = album_search_results['items']
        sp_search_album_df = pd.DataFrame(album_search_results_2)
        return sp_search_album_df

    album_search_df = sp_search_album(sp_artist_search.artist_search_id[0])

    album_name_list = list(album_search_df.name)
    album_id = list(album_search_df.id)
    album_release_date = list(album_search_df.release_date)

class sp_track_search:

    def sp_search_track(album, alb_num, rel_date):
        ## Function that utilizes Spotify's album_tracks method to return all tracks from an album ID
            track_search_results = sp.album_tracks(album, limit = 50)
            track_search_results_2 = track_search_results['items']
            sp_search_track_df = pd.DataFrame(track_search_results_2)
            sp_search_track_df['album_name'] = alb_num
            sp_search_track_df['release_date'] = rel_date
            return sp_search_track_df

    for i in range(len(sp_album_search.album_id)):
        if i == 0:
            album_track_df = sp_search_track(sp_album_search.album_id[i], sp_album_search.album_name_list[i], sp_album_search.album_release_date[i])
        else:
            new_track_df = sp_search_track(sp_album_search.album_id[i], sp_album_search.album_name_list[i], sp_album_search.album_release_date[i])
            album_track_df = album_track_df.append(new_track_df)
            album_track_df.reset_index(drop = True, inplace = True)

    track_list = list(album_track_df.id)


class sp_audio_features:

    def sp_features_audio(song_list):
        ## Function that utilizes Spotify's audio_features method to return audio features (energy, tempo, etc)
        audio_features_results = sp.audio_features(tracks = song_list)
        audio_df = pd.DataFrame(audio_features_results)
        return audio_df

    for i in range(len(sp_track_search.track_list)):
        if i == 0:
            audio_features_df = sp_features_audio(sp_track_search.track_list[i])
        else:
            new_audio_features_df = sp_features_audio(sp_track_search.track_list[i])
            audio_features_df = audio_features_df.append(new_audio_features_df)
            audio_features_df.reset_index(drop = True, inplace = True)

print('Length of album_track_df: ', len(sp_track_search.album_track_df))
print('Length of audio_features_df: ', len(sp_audio_features.audio_features_df))
print('Length of track_analysis_df: ', len(sp_track_analysis.track_analysis_df), '\n')

print('Difference in length: ', abs(len(sp_track_search.album_track_df) - len(sp_audio_features.audio_features_df)))
