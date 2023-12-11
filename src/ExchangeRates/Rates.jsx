import { blue } from "@mui/material/colors";
import "./rates.css";
import OutlinedInput from "@mui/material/OutlinedInput";

function Rates() {
  const api_key = "8bb428d7c53ba65c942b543a";

  const API = `https://v6.exchangerate-api.com/v6/${api_key}/latest/`;

  async function changeValue(event) {
    const baseCurrency = document.getElementById("baseCurrency");

    const list = document.querySelector(".list-group");

    const items = document.querySelectorAll(".list-group-item");
    items.forEach((item) => item.remove());

    let response = null;

    if (event) {
      response = await fetch(API + event.target.value);
    } else {
      response = await fetch(API + "KGS");
    }
    const result = await response.json();

    let myCurrencies = {};

    for (let key in result.conversion_rates) {
      if (
        key === "KGS" ||
        key === "USD" ||
        key === "KZT" ||
        key === "EUR" ||
        key === "RUB"
      ) {
        myCurrencies = { ...myCurrencies, [key]: result.conversion_rates[key] };
      }
    }

    for (let key in myCurrencies) {
      const li = document.createElement("li");
      li.innerHTML = `${key}: ${myCurrencies[key]}`;
      li.classList.add("list-group-item");
      if (baseCurrency.value === key) {
        li.style.fontWeight = "800";
        li.style.backgroundColor = "#e3f2fd";
      }
      list.appendChild(li);
    }
  }

  changeValue();

  async function convert() {
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;
    const amount = document.getElementById("amount").value;
    if (amount === "") {
      alert("Введите сумму для конвертации");
    } else {
      const response = await fetch(
        ` https://v6.exchangerate-api.com/v6/${api_key}/pair/${fromCurrency}/${toCurrency}/${amount}`
      );

      const result = await response.json();
      console.log(result);

      const rate = document.getElementById("rate");
      rate.innerHTML = `По курсу:  ${result.conversion_rate}`;

      const result2 = document.getElementById("result");
      result2.innerHTML = result.conversion_result;
    }
  }
  window.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      convert();
    }
  });

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "end",
        }}
      >
        <nav
          style={{
            backgroundColor: "blue",
          }}
        >
          <select
            className="select"
            id="baseCurrency"
            onchange="changeValue(event)"
          >
            <option value="KGS">KGS</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="KZT">KZT</option>
            <option value="RUB">RUB</option>
          </select>
        </nav>
      </div>

      <div
        style={{
          height: "600px",
        }}
      >
        <div
          style={{
            marginTop: "50px",
          }}
        >
          <div className="col-6">
            <div>
              <select
                id="fromCurrency"
                className="form-select form-select-md"
                aria-label="Default select example"
                style="max-width: 200px"
                onchange="convert()"
              >
                <option value="KGS">KGS</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="KZT">KZT</option>
                <option value="RUB">RUB</option>
              </select>
              <select
                id="toCurrency"
                style="max-width: 200px"
                onchange="convert()"
              >
                <option value="USD">USD</option>
                <option value="KGS">KGS</option>
                <option value="EUR">EUR</option>
                <option value="KZT">KZT</option>
                <option value="RUB">RUB</option>
              </select>

              <div>
                <OutlinedInput
                  id="amount"
                  type="number"
                  className="form-control"
                  placeholder="Amount"
                  aria-label="Amount"
                  aria-describedby="basic-addon1"
                  style="max-width: 200px"
                />
              </div>
              <button id="convert" onclick="convert()">
                Convert
              </button>
              <div style="width: 100%">
                <figure className="text-end">
                  <blockquote class="blockquote">
                    <p id="result"></p>
                  </blockquote>
                  <figcaption
                    id="rate"
                    className="blockquote-footer"
                  ></figcaption>
                </figure>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul className="list-group"></ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rates;
