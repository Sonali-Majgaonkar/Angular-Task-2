import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-chart-formation',
  templateUrl: './chart-formation.component.html',
  styleUrls: ['./chart-formation.component.css']
})
export class ChartFormationComponent implements OnInit {
  chartForm: FormGroup | any
  chart: any;

  ngOnInit(): void {
    this.chartForm = new FormGroup({
      firstValue: new FormControl('', [Validators.required, Validators.max(100)]),
      secondValue: new FormControl('', [Validators.required, Validators.max(100)])
    })
   
  }

  onBlurEve() {
   this.chart?.destroy();
    if (this.chartForm.get('firstValue').value < 100 && this.chartForm.get('firstValue').value > 0) {
      this.chartForm.patchValue({
        secondValue: 100 - this.chartForm.get('firstValue').value,
      })
    }
    if (this.chartForm.get('secondValue').value < 100 && this.chartForm.get('secondValue').value > 0) {
      this.chartForm.patchValue({
        firstValue: 100 - this.chartForm.get('secondValue').value,
      })
    }

    this.chartForm.touched = this.chartForm.get('secondValue').touched = this.chartForm.get('secondValue').touched = true;
  }

  onsubmit() {
    console.log('Chart Form', this.chartForm);
    this.createChart();
  }

  createChart() {
    this.chart = new Chart("MyChart", {
      type: 'pie', 
      data: {
        datasets: [{
          label: 'Value',
          data: [this.chartForm.get('firstValue').value,this.chartForm.get('secondValue').value],
          backgroundColor: [
            'red',
            'blue',
          ],
          hoverOffset: 4
        }],
      },
      options: {
        aspectRatio: 2.5
      },
    });
    console.log(this.chart)
  }

}
