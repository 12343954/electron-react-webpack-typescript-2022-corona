import React, { Component } from 'react';
import { LineChart } from './LineChart';
import { BarChart } from './BarChart';
import { PieChart } from './PieChart';
import { DoughnutChart } from './DoughnutChart';
import { PolarAreaChart } from './PolarAreaChart';
import { ScatterChart } from './ScatterChart';
import { MultitypeChart } from './MultitypeChart';
import { StackedBarChart } from './StackedBarChart';

export class ChartJs extends Component {
  render() {
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title">
            Chart-js
          </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Charts</a></li>
              <li className="breadcrumb-item active" aria-current="page">Chart-js</li>
            </ol>
          </nav>
        </div>
        <div className="row">
          <div className="col-xl-3 col-lg-4 col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Line Chart</h4>
                <LineChart />
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Bar Chart</h4>
                <BarChart />
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Multitype Chart</h4>
                <MultitypeChart />
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Stacked Bar Chart</h4>
                <StackedBarChart />
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Area Chart</h4>
                <PolarAreaChart />
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Doughnut Chart</h4>
                <DoughnutChart />
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Pie Chart</h4>
                <PieChart />
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Scatter Chart</h4>
                <ScatterChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ChartJs
