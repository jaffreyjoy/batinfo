<div align="center">

<img src="./assets/batinfo-logo.png" align="center">

<h1 >batinfo</h1>

<img src="https://img.shields.io/npm/v/batinfo.svg"/>

<img src="https://img.shields.io/npm/dt/batinfo.svg">

<img src="https://img.shields.io/github/license/jaffreyjoy/batinfo.svg">

<p>
A simple utility that displays minimal battery information.
</p>

</div>

> This utility was built to counter the battery indicator missing [issue in Windows 10](https://answers.microsoft.com/en-us/windows/forum/windows_10-other_settings/battery-icon-missing-in-windows-10/791788c3-6e68-40cf-8b06-97c0c7c7eb03?auth=1) for me. Apparently, this could also be used to view the battery's charging information while using a command-line OS like ubuntu-server, etc.


## Installation (Windows)
```
 > npm i -g batinfo
```

<div align="center">OR</div>

## Installation (UNIX based OS)
```
 $ sudo npm i -g batinfo
```

## Usage (after completing above step)
```bash
H:\__tryouts\batinfo>batinfo

🔋  Charge Remaining: 88%

🔌  Charging: YES ⚡

⏲️  Time remaining: Not available

```

> The "Time remaining" functionality is only available on UNIX based OS, while the battery is discharging. The above command was run on a Windows machine, hence the "Time remaining" functionality displays as "Not Available".


## Run (from source)
```
 $ git clone https://www.github.com/jaffreyjoy/batinfo
```
```
 $ cd batinfo 
```
```
 $ npm i
```
```
 $ node index.js
```

## Credits
[systeminformation](https://github.com/sebhildebrandt/systeminformation) 🙌

## License
MIT
