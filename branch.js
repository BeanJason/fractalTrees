
function Branch(begin, end) {
    this.begin = begin;
    this.end = end;
    this.finished = false;

    this.show = function() {
        stroke(255);
        line(this.begin.x, this.begin.y, this.end.x, this.end.y);
    }

    //15 at 11:05
    this.branchA = function(angle) {
        this.finished = true;
        var dir = p5.Vector.sub(this.end, this.begin);
        //default PI/4
        dir.rotate(angle);
        //default .67
        dir.mult(.67);
        var newEnd = p5.Vector.add(this.end, dir);
        

        var right = new Branch(this.end, newEnd);
        
        
        return right;
    }
    
    this.branchB = function(angle) {
        var dir = p5.Vector.sub(this.end, this.begin);
        dir.rotate(-angle);
        dir.mult(.67);
        var newEnd = p5.Vector.add(this.end, dir);

        var left = new Branch(this.end, newEnd);


        var left = new Branch(this.end, newEnd, color, true);
        

        return left;
    }
}