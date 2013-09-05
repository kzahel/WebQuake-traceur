COM = {};

COM.argv = [];

COM.standard_quake = true;

COM.DefaultExtension = function(path, extension)
{
	var i, src;
	for (i = path.length - 1; i >= 0; --i)
	{
		src = path.charCodeAt(i);
		if (src === 47)
			break;
		if (src === 46)
			return path;
	}
	return path + extension;
};

COM.Parse = function(data)
{
	COM.token = '';
	var i = 0, c;
	if (data.length === 0)
		return;
		
	var skipwhite = true;
    while(true)
	{
		if (skipwhite !== true)
			break;
		skipwhite = false;
            while(true)
		{
			if (i >= data.length)
				return;
			c = data.charCodeAt(i);
			if (c > 32)
				break;
			++i;
		}
		if ((c === 47) && (data.charCodeAt(i + 1) == 47))
		{
                    while(true)
			{
				if ((i >= data.length) || (data.charCodeAt(i) === 10))
					break;
				++i;
			}
			skipwhite = true;
		}
	}

	if (c === 34)
	{
		++i;
            while(true)
		{
			c = data.charCodeAt(i);
			++i;
			if ((i >= data.length) || (c === 34))
				return data.substring(i);
			COM.token += String.fromCharCode(c);
		}
	}

    while(true)
	{
		if ((i >= data.length) || (c <= 32))
			break;
		COM.token += String.fromCharCode(c);
		++i;
		c = data.charCodeAt(i);
	}

	return data.substring(i);
};

COM.CheckParm = function(parm)
{
	var i;
	for (i = 1; i < COM.argv.length; ++i)
	{
		if (COM.argv[i] === parm)
			return i;
	}
};

COM.LoadFile = function(){
    console.error("use A_LoadFile")
    debugger;
}

COM.A_CheckRegistered = function()
{
	Cvar.Set('registered', '1');
	Con.Print('Playing registered version.\n');
    return;


    var h;
    await h = COM.A_LoadFile('gfx/pop.lmp');
	if (h == null)
	{
		Con.Print('Playing shareware version.\n');
		if (false && COM.modified === true)
			Sys.Error('You must have the registered version to use modified games');
		return;
	}
	var check = new Uint8Array(h);
	var pop =
	[
		0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
		0x00, 0x00, 0x00, 0x00, 0x66, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x66, 0x00, 0x00, 0x00,
		0x00, 0x00, 0x00, 0x66, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x67, 0x00, 0x00,
		0x00, 0x00, 0x66, 0x65, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x65, 0x66, 0x00,
		0x00, 0x63, 0x65, 0x61, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x61, 0x65, 0x63,
		0x00, 0x64, 0x65, 0x61, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x61, 0x65, 0x64,
		0x00, 0x64, 0x65, 0x64, 0x00, 0x00, 0x64, 0x69, 0x69, 0x69, 0x64, 0x00, 0x00, 0x64, 0x65, 0x64,
		0x00, 0x63, 0x65, 0x68, 0x62, 0x00, 0x00, 0x64, 0x68, 0x64, 0x00, 0x00, 0x62, 0x68, 0x65, 0x63,
		0x00, 0x00, 0x65, 0x67, 0x69, 0x63, 0x00, 0x64, 0x67, 0x64, 0x00, 0x63, 0x69, 0x67, 0x65, 0x00,
		0x00, 0x00, 0x62, 0x66, 0x67, 0x69, 0x6A, 0x68, 0x67, 0x68, 0x6A, 0x69, 0x67, 0x66, 0x62, 0x00,
		0x00, 0x00, 0x00, 0x62, 0x65, 0x66, 0x66, 0x66, 0x66, 0x66, 0x66, 0x66, 0x65, 0x62, 0x00, 0x00,
		0x00, 0x00, 0x00, 0x00, 0x00, 0x62, 0x63, 0x64, 0x66, 0x64, 0x63, 0x62, 0x00, 0x00, 0x00, 0x00,
		0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x62, 0x66, 0x62, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
		0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x61, 0x66, 0x61, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
		0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x65, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
		0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x64, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00
	];
	var i;
	for (i = 0; i < 256; ++i)
	{
		if (check[i] !== pop[i])
			Sys.Error('Corrupted data file.');
	}
	Cvar.Set('registered', '1');
	Con.Print('Playing registered version.\n');
    //return DeferSoon()
};

COM.InitArgv = function(argv)
{
	COM.cmdline = (argv.join(' ') + ' ').substring(0, 256);
	var i;
	for (i = 0; i < argv.length; ++i)
		COM.argv[i] = argv[i];	
	if (COM.CheckParm('-safe') != null)
	{
		COM.argv[COM.argv.length] = '-nosound';
		COM.argv[COM.argv.length] = '-nocdaudio';
		COM.argv[COM.argv.length] = '-nomouse';
	}
	if (COM.CheckParm('-rogue') != null)
	{
		COM.rogue = true;
		COM.standard_quake = false;
	}
	else if (COM.CheckParm('-hipnotic') != null)
	{
		COM.hipnotic = true;
		COM.standard_quake = false;
	}
};

COM.A_Init = function()
{
	if (false && (document.location.protocol !== 'http:') && (document.location.protocol !== 'https:'))
		Sys.Error('Protocol is ' + document.location.protocol + ', not http: or https:');

	var swaptest = new ArrayBuffer(2);
	var swaptestview = new Uint8Array(swaptest);
	swaptestview[0] = 1;
	swaptestview[1] = 0;
	if ((new Uint16Array(swaptest))[0] === 1)
		COM.LittleLong = (function(l) {return l;});
	else
		COM.LittleLong = (function(l) {return (l >>> 24) + ((l & 0xff0000) >>> 8) + (((l & 0xff00) << 8) >>> 0) + ((l << 24) >>> 0);});

	COM.registered = Cvar.RegisterVariable('registered', '0');
	Cvar.RegisterVariable('cmdline', COM.cmdline, false, true);
	Cmd.AddCommand('path', COM.Path_f);
    //console.log('filesystem initin')
	await COM.A_InitFilesystem();
    //console.log('filesystem ititd, checkin registeerd')
	await COM.A_CheckRegistered();
    //console.log('checked registered')

    //return DeferSoon();
};

COM.searchpaths = [];

COM.Path_f = function()
{
	Con.Print('Current search path:\n');
	var i = COM.searchpaths.length, j, s;
	for (i = COM.searchpaths.length - 1; i >= 0; --i)
	{
		s = COM.searchpaths[i];
		for (j = s.pack.length - 1; j >= 0; --j)
			Con.Print(s.filename + '/' + 'pak' + j + '.pak (' + s.pack[j].length + ' files)\n');
		Con.Print(s.filename + '\n');
	}
};

COM.WriteFile = function(filename, data, len)
{
	filename = filename.toLowerCase();
	var dest = [], i;
	for (i = 0; i < len; ++i)
		dest[i] = String.fromCharCode(data[i]);
	try
	{
		localStorage.setItem('Quake.' + COM.searchpaths[COM.searchpaths.length - 1].filename + '/' + filename, dest.join(''));
	}
	catch (e)
	{
		Sys.Print('COM.WriteFile: failed on ' + filename + '\n');
		return;
	}
	Sys.Print('COM.WriteFile: ' + filename + '\n');
	return true;
};

COM.WriteTextFile = function(filename, data)
{
	filename = filename.toLowerCase();
	try
	{
		localStorage.setItem('Quake.' + COM.searchpaths[COM.searchpaths.length - 1].filename + '/' + filename, data);
	}
	catch (e)
	{
		Sys.Print('COM.WriteTextFile: failed on ' + filename + '\n');
		return;
	}
	Sys.Print('COM.WriteTextFile: ' + filename + '\n');
	return true;
};

COM.A_LoadFile = function(filename)
{
//                                    if (filename == 'maps/e1m3.bsp') { debugger; }
    //console.log("COM.A_LoadFile",filename);
	filename = filename.toLowerCase();
	var xhr = new XMLHttpRequest();
	xhr.overrideMimeType('text/plain; charset=x-user-defined');
	var i, j, k, search, netpath, pak, file, data;
	Draw.BeginDisc();
	for (i = COM.searchpaths.length - 1; i >= 0; --i)
	{
		search = COM.searchpaths[i];
		netpath = search.filename + '/' + filename;
		await data = localStorageGetItem('Quake.' + netpath);
		if (data != null)
		{
			Sys.Print('FindFile: ' + netpath + '\n');
			Draw.EndDisc();
			return Q.strmem(data);
		}
		for (j = search.pack.length - 1; j >= 0; --j)
		{
			pak = search.pack[j];
			for (k = 0; k < pak.length; ++k)
			{
				file = pak[k];
				if (file.name !== filename)
					continue;
				if (file.filelen === 0)
				{
					Draw.EndDisc();
					return new ArrayBuffer(0);
				}
				xhr.open('GET', search.filename + '/pak' + j + '.pak', true);
				xhr.setRequestHeader('Range', 'bytes=' + file.filepos + '-' + (file.filepos + file.filelen - 1));
				//xhr.send();
                            //console.log("XHRSEND")
                            await xhrsend( xhr );
                            //console.log("XHR-SENT!")
				if ((xhr.status >= 200) && (xhr.status <= 299) && (xhr.responseText.length === file.filelen))
				{

					Sys.Print('PackFile: ' + search.filename + '/pak' + j + '.pak : ' + filename + '\n')
					Draw.EndDisc();
					return Q.strmem(xhr.responseText);
				}
				break;
			}
		}
		xhr.open('GET', netpath, true);
		//xhr.send();
            await xhrsend(xhr);
		if ((xhr.status >= 200) && (xhr.status <= 299))
		{
			Sys.Print('FindFile: ' + netpath + '\n');
			Draw.EndDisc();
			return Q.strmem(xhr.responseText);
		}
	}

	Sys.Print('FindFile: can\'t find ' + filename + '\n');
    console.assert(false)
	Draw.EndDisc();
};

COM.A_LoadTextFile = function(filename)
{
    var buf;
        await buf = COM.A_LoadFile(filename);
	if (buf == null)
		return;
	var bufview = new Uint8Array(buf);
	var f = [];
	var i;
	for (i = 0; i < bufview.length; ++i)
	{
		if (bufview[i] !== 13)
			f[f.length] = String.fromCharCode(bufview[i]);
	}
	return f.join('');
};

COM.A_LoadPackFile = function(packfile)
{
    //console.log("LoadPackFile", packfile)

	var xhr = new XMLHttpRequest();
	xhr.overrideMimeType('text/plain; charset=x-user-defined');
	xhr.open('GET', packfile, true);
	xhr.setRequestHeader('Range', 'bytes=0-11');
    await xhrsend( xhr )
	//xhr.send();
	if ((xhr.status <= 199) || (xhr.status >= 300) || (xhr.responseText.length !== 12))
		return;
	var header = new DataView(Q.strmem(xhr.responseText));
	if (header.getUint32(0, true) !== 0x4b434150)
		Sys.Error(packfile + ' is not a packfile');
	var dirofs = header.getUint32(4, true);
	var dirlen = header.getUint32(8, true);
	var numpackfiles = dirlen >> 6;
	if (numpackfiles !== 339)
		COM.modified = true;
	var pack = [];
	if (numpackfiles !== 0)
	{
		xhr.open('GET', packfile, true);
		xhr.setRequestHeader('Range', 'bytes=' + dirofs + '-' + (dirofs + dirlen - 1));
            await xhrsend(xhr);

		if ((xhr.status <= 199) || (xhr.status >= 300) || (xhr.responseText.length !== dirlen))
			return;
		var info = Q.strmem(xhr.responseText);
		if (CRC.Block(new Uint8Array(info)) !== 32981)
			COM.modified = true;
		var i;
		for (i = 0; i < numpackfiles; ++i)
		{
			pack[pack.length] =
			{
				name: Q.memstr(new Uint8Array(info, i << 6, 56)).toLowerCase(),
				filepos: (new DataView(info)).getUint32((i << 6) + 56, true),
				filelen: (new DataView(info)).getUint32((i << 6) + 60, true)
			}
		}
	}
	Con.Print('Added packfile ' + packfile + ' (' + numpackfiles + ' files)\n');

    return pack;
};

COM.A_AddGameDirectory = function(dir)
{
	var search = {filename: dir, pack: []};
	var pak, i = 0;
    while(true)
	{
            //console.log('lookin for pak file',i)
		await pak = COM.A_LoadPackFile(dir + '/' + 'pak' + i + '.pak');
            //console.log('loaded pak file',pak);

	    if (pak == null) {
			break;
            }
		search.pack[search.pack.length] = pak;
            //console.log('incrementin')
		++i;
	}
	COM.searchpaths[COM.searchpaths.length] = search;
    //return DeferSoon();
};

COM.A_InitFilesystem = function()
{
	var i, search;
/*	
	i = COM.CheckParm('-basedir');
	if (i != null)
		search = COM.argv[i + 1];
	if (search != null)
		await COM.A_AddGameDirectory(search);
    else {
        console.log('adding id1')
		await COM.A_AddGameDirectory('id1');
        console.log('added id1')
    }
		
	if (COM.rogue === true)
		await COM.A_AddGameDirectory('rogue');
	else if (COM.hipnotic === true)
		await COM.A_AddGameDirectory('hipnotic');
		
	i = COM.CheckParm('-game');
	if (i != null)
	{
		search = COM.argv[i + 1];
		if (search != null)
		{
			COM.modified = true;
			await COM.A_AddGameDirectory(search);
		}
	}
*/

        console.log('adding id1')
		await COM.A_AddGameDirectory('id1');
        console.log('added id1')

	COM.gamedir = [COM.searchpaths[COM.searchpaths.length - 1]];
    //console.log('initfilesystem returnin')

};