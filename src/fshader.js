// export default `
// uniform float parameter;

// void main()
// {
//    vec4 pixel=gl_FragCoord;
//    gl_FragColor = vec4(cos(parameter),sin(parameter), tan(parameter), 1);
// }

// `

export default `
uniform float parameter;

void main()
{
   vec4 pixel=gl_FragCoord;
   gl_FragColor = vec4(sin(pixel.x*0.01+parameter),sin(pixel.y*0.01+parameter), 0.0, 1);
}

`

