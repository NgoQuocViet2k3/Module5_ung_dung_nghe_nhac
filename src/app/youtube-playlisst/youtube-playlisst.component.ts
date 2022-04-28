import {Component, OnInit} from '@angular/core';
import {SongService} from '../service/song.service';
import {Song} from '../model/song';

@Component({
  selector: 'app-youtube-playlisst',
  templateUrl: './youtube-playlisst.component.html',
  styleUrls: ['./youtube-playlisst.component.css']
})
export class YoutubePlaylisstComponent implements OnInit {
  playlist: Song[] = [];

  constructor(private songService: SongService) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.playlist = this.songService.playlist;
  }
}
