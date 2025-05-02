{

    // learn destructrnig in typescript

    // object destructuring -->>

    const user = {
        userId: 2345,
        name: {
            firstName: "Mostfiz",
            lasttName: "Rahman"
        },
        contactNo: "01300000000",
        address: "Uganda"
    }

    const { contactNo, name: {firstName}} = user;

    // arr destructuring -->>

    const myFriends = ['chandler', 'joey', 'ross', 'rachel', 'monica', 'purnima'];

    const [,, bestFriend, ...rest] = myFriends; //// amra oi array thek first comma thek first value rakhsi and secund value ta k secund comma te rakhsi and baki gula rest operator er mordhe rekhe disi


}