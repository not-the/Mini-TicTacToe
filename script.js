let $=(s)=>{return document.querySelector(s)}, $$=(s)=>{return document.querySelectorAll(s)},
a = 'addEventListener', f = 'forEach', i = 'innerText', t = 0, _='';
$$('.s')[f](z => z[a]('click', c => {
    let e = c.srcElement;
    if(t===-1) return $$('.s')[f](e=>e[i]=_),t=0;
    if(e[i]) return;
    let s=['X','O'],u=t%2;
    e[i]=s[u],u=1-u;
    let g = e.className.replace(/s /,_).split(' '),
    ae=r=>r.every(v=>v[i]===r[0][i]),
    n=(x=`${s[u]}'s turn`,nt=t+1)=>{$('#t')[i]=x,t=nt};
    for(c of g) if(ae(Array.from($$(`.${c}`)))) return n(`${e[i]} wins! Click anywhere to play again`, -1);
    n();
}));


// a   'addEventListener'
// f   'forEach'
// i   'innerText'
// t   turn
// z   
// c   click event
// e   Clicked element
// s   symbols
// u   user
// g   sets
// ae  allEquel
// v   val
// r   arr
// n   nextTurn
// x   text
// nt  new_turn
