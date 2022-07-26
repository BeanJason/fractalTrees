//var angle = 0;
var tree = [];
var leaves = [];

var count = 0;

function setup() {
  createCanvas(1000, 1000);
  var drawButton = createButton("create tree")
  var a = createVector(width / 2, height);
  var b = createVector(width / 2, height - 250);
  root = new Branch(a, b);

  tree[0] = root;

  angleSlider = (createSlider(0, TWO_PI, PI/4, 0.001));
  

  drawButton.mousePressed(branch);

}

function mousePressed(){

  angle = angleSlider.value();
  // for(var i = tree.length - 1; i >= 0; i--){
    
  // }
}

function draw() {
  background(51);

  
  //angle = slider.value();

  //first vid
  // stroke(255);
  // translate(200, height);
  // branch(100);
  //branch();

  for (var i = 0; i < tree.length; i++){
    tree[i].show();
  }

  for (var i = 0; i < leaves.length; i++){
    fill(255, 0, 100);
    ellipse(leaves[i].x, leaves[i].y, 8, 8)
  }
  

}

function branch() {
  
  let rand = 0;
  let randAngle = 0;
  for (var i = tree.length - 1; i >= 0; i--){
  if(!tree[i].finished){
    
    rand = random(1, 5);
    console.log(rand);
    if(rand <= 2){
      // randAngle = random(PI, (3*PI / 2));
      // console.log(randAngle);
      // angle = randAngle;
      angle = angleSlider.value();
    }else {
      angle = angleSlider.value();
    }
    tree.push(tree[i].branchA(angle));
    tree.push(tree[i].branchB(angle));
    tree[i].finished = true;
  }
}
  count++;

  if(count % 20 == 0) {
    for (var i = 0; i < tree.length; i++){
      if(!tree[i].finished){
        var leaf = tree[i].end.copy();
        leaves.push(leaf);
      }
    }
  }
}



// function branch(len) {
//   line(0, 0, 0, -len);
//   translate(0, -len);
//   root.show();
//   //first vid
//   // if(len > 4) {
//   //   push();
//   //   rotate(angle);
//   //   branch(len*0.67);
//   //   pop();
//   //   push();
//   //   rotate(-angle);
//   //   branch(len*0.67);
//   //   pop();
//   // }
  

  
//   //line(0, 0, 0, -len*0.67);
// }
