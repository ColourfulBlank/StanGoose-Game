const Obstacle = require("Obstacle");

var Car = cc.Class({
    /*
    	Obstacle properties:
			speedX
			initX
			resetX
			initY
	*/
    extends: Obstacle,

    /*Implements abstract methods*/

    /*
        ---VIsitor pattern---
    */
    gooseVisit() {
    	this.manager.carHit(this);
    },

});
