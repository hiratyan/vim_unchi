document.write( '<img id="unchi" src="unchi.png">' );

var x = 0;
var y = 0;

addEventListener( "keydown", keydownfunc );

function keydownfunc( event ) {
 
	//押されたボタンに割り当てられた数値を、key_codeに代入
	var key_code = event.keyCode;
 
	if( key_code === 37 ) x -= 32;		//「左ボタン」が押されたとき、xの値から32を引き算する
	if( key_code === 38 ) y -= 32;		//「上ボタン」が押されたとき、yの値から32を引き算する
	if( key_code === 39 ) x += 32;		//「右ボタン」が押されたとき、xの値に32を足し算する
	if( key_code === 40 ) y += 32;		//「下ボタン」が押されたとき、yの値に32を足し算する
 
	//ウンチの画像の位置を反映
	document.getElementById( 'unchi' ).style.top = y + "px";
	document.getElementById( 'unchi' ).style.left = x + "px";
 
}