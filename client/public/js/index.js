var socket = io('ws://localhost:5000', {transports: ['websocket']});

socket.on('broadcast',function(data) {
          console.log(data.from+"-"+data.text);
          var li = $("<li class='list-group-item'></li>");
          li.text(`${data.from}: ${data.text}`);  
          $('#messages').append(li);
      });

socket.on('disconnect', function () {
      console.log('Someone Disconnected to Server');
   }); 

