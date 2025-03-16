# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

The project is a currency exchange website that can be used to check the current exchange rate of different currencies including crypto currencies. It consists of an Exchange page where you can select the base and target currencies, an amount input filed to specify a particular amount which then displays the current exchange rate for the base currency and the supposed amount for the target currency.

The project also includes a history page where the exchange rate history of a particular base currency against a target currency is presented using a line graph showing the date(s) and their corresponding amount. it also features a date select dropdown that can be used to select a particular date for the selected base/target currency.

## Application Setup to Run Locally

To run this currency exchange locally, you need to first have node installed (can be installed from [nodejs website](http://nodejs.org/)) then execute the following commands from your command line or terminal

``` 
git clone https://github.com/Master-Daniel/currency-exchange.git 
cd currency-exchange
npm install

```

create a .env file at the root directory of the project "currency-exchange" with the following variable and values

```
VITE_EXCHANGE_API="https://cdn.jsdelivr.net/npm/@fawazahmed0"
```

The api endpoint do not have cors configured in it so you may encounter a cross-origin request been blocked. in order to fix that since I do not have direct access to the api endpoint to fix the cors configuration, I have implemented the cors-anywhere public proxy to re-route the request hence you have to visit the url [cors-anywhere](https://cors-anywhere.herokuapp.com/corsdemo) and click on the button "Request temporary access to the demo server" to be granted temporary access.

## Recommendation
- The API endpoint used in this project is not a reliable one and may not be available at all time
- Since the api source code is available in a public repository, it is advisable to clone and host on your own server and configure cors to avoid using the public proxy cors-anywhere.

## Running The Application

After you must have been granted temporary access to the cors-anywhere proxy, run the following command on the terminal or command line again ensuring you are in the correct directory "cd currency-exchange"

``` npm run dev ```

This will start up a development server with which you can use to access the website both on desktop and mobile devices. visit the following url on your browser. These url(s) will be printed on the console after you must have executed the command above. 

```
[localhost](http://localhost:5173) - Desktop browsers only
[localhost](http://your-ip-address:5173) - Desktop & Mobile

```

*Note: your mobile device must be connected to the same internet (wifi) for you to be able to access the website via your mobile device*