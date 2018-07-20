import React, { Component } from 'react';
import './App.css';

class Car extends React.Component {
    

    render () {
        var carColor = {
            marginBottom:24,
            height:200,
            width:252
          };
         var carTitle = {
 
         };
         var car = {
            background: this.props.color,
           
         }
          var  title = {
            paddingLeft:8
          }
          var carTitle = {
              paddingTop:145,
              fontSize:18,
              color:'#fff'
          }
          var priseContainer = {
            display:'flex',
            paddingTop:4,
            paddingLeft:8
          }
          var rub = {
              fontSize:18,
              color:'#fff'
          }
          var usd = {
            fontSize:14,
            color:'lightgray'
          }
        return <div style={car}>
        <div style={carColor}>
        <div style={title}>
        <div style={carTitle}>{this.props.title}</div>
        </div>
        <div style={priseContainer}> 
        <div style={rub}>{this.props.priseRub}</div>
        <div style={usd}>{this.props.priseUsd}</div>
        </div>
        </div>
        </div>
        
    }
}

class CarsGrid extends React.Component {
    render () {
        return this.props.cars.map(function(car){
            return < Car key={car.id}
            color={car.color} 
            title={car.title}
            priseUsd={car.priseUsd}
            priseRub={car.priseRub} >  </Car>
        })
        
    }
}



class CarsApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {cars: [
            {
                id:0,
                title:"BMW 5-reihe (F10), 2010",
                priseUsd : "5400$",
                priseRub : "102 809 p.",
                color : "green"

            },
            {
                id:1,
                title :"BMW 5-reihe (F10), 2010",
                priseUsd : "5400$",
                priseRub : "102 809 p.",
                color : "yellow"

            }
            ,
            {
                id:2,
                title:"BMW 5-reihe (F10), 2010",
                priseUsd : "5400$",
                priseRub : "102 809 p.",
                color : "pink"

            }
    ]}
}

    render () {
        var CarsApp = {
            background:'#f6f7f7', 
            height:715,
            width:300,
            borderRadius:3,
            border:'1px solid #e8e9ec',
            float:'right',
            marginRight: 24,
            marginTop:94,
            paddingRight:24,
            paddingLeft:24,
            paddingTop:16

          };
          var textContainer = {
              display:'flex',
              paddingBottom:24,
              paddingLeft:8

          }
          var icon = {
              width:18,
              height:11,
              background: '#ffab00',
              marginRight:8
          }
          var text = {

          }

        return <div style={CarsApp} >
        <div style={textContainer}>
        <img style={icon} />
        <div style={text}> VIP объявления </div>
        </div>
        <CarsGrid cars={this.state.cars} />
        </div>
   
        
    }
    
}
export default CarsApp;
