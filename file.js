
        fs.writeFile('hello.json', JSON.stringify('hello from file system'), function (err) {
          if (err) throw err;
          console.log('Saved!');
        });
