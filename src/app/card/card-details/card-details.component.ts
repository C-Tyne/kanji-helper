import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { KanjiModelService } from 'src/app/shared/kanji-model.service';

@Component({
  selector: 'card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {

  isFlipped: boolean | any;
  cardDetails?: any;

  constructor(private route: ActivatedRoute, private kanjiService: KanjiModelService, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const kanjiId = params.get('id') + '';
      this.kanjiService.getKanjiJSON().subscribe(data => {
        const kanjiData = data[kanjiId];
        if (kanjiData) {
          this.cardDetails = kanjiData;
        } else {
          this.router.navigate(['404'])
        }
      })
    })
  }

  handleCardClick() {
    this.isFlipped = !this.isFlipped;
  }
}
