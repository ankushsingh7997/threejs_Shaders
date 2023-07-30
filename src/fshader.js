// export default `
// uniform float parameter;

// void main()
// {
//    vec4 pixel=gl_FragCoord;
//    gl_FragColor = vec4(cos(parameter),sin(parameter), tan(parameter), 1);
// }

// `

// export default `
// uniform float parameter;

// void main()
// {
//    vec4 pixel=gl_FragCoord;
//    gl_FragColor = vec4(sin(pixel.x*0.01+parameter),sin(pixel.y*0.01+parameter), 0.0, 1);
// }

// `


// export default `
// uniform float parameter;
// uniform sampler2D texture1;
// uniform sampler2D texture2;
// varying vec2 uvu;

// void main()
// {
//    gl_FragColor = texture(texture1,uvu);
//    gl_FragColor.r +=sin(parameter);
//    gl_FragColor.g +=cos(parameter);
   

// }

// `

// for two textures

// just like slideshow 
export default `
uniform float parameter;
uniform sampler2D texture1;
uniform sampler2D texture2;
varying vec2 uvu;

void main()
{
  vec4 image1 =texture(texture1,uvu);
  vec4 image2 =texture(texture2,uvu);
  float s=sin(parameter);
  s=s*s;
  gl_FragColor =mix(image1,image2,s);
   

}

`

