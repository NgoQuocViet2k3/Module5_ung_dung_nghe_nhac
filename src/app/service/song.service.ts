import {Injectable} from '@angular/core';
import {Song} from '../model/song';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  constructor() {
  }

  playlist: Song[] = [{
    id: '5uirM3SkPJM',
    name: 'Hồng trần Bỉ ngạn không có chàng'
  },
    {
      id: '9e3BdTlwyVE',
      name: 'Táng tiên - Diệp Lí'
    },
    {
      id: 'qfxk7OKhYiU',
      name: 'Người anh em tốt của tôi - Cao Tiến & Tiểu Thẩm Dương'
    },
    {
      id: 'T-NylGybUr8',
      name: 'Sát thủ - Lâm Tuấn Kiệt'
    },
    {
      id: '2CfJpfDi0oc',
      name: 'Vân Yên Nhất Mộng - Lưu Tăng Đồng'
    }
  ];

  findSongById(id: string) {
    return this.playlist.find(item => item.id === id);
  }
}
