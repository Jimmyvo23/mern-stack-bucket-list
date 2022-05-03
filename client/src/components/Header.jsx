import React from "react";

function Header() {
  return (
    <header>
      <h1>Bucket List</h1>
      <nav>
        <ul>
          <li>
            <a href="#">Bucket List with your</a>
            <ul>
              <li>
                <a href="https://www.forgettingfairytales.com/personal-development-bucket-list/">
                  Self
                </a>
              </li>
              <li>
                <a href="https://bucketlistjourney.net/couples-bucket-list-things-to-do/">
                  Partner
                </a>
              </li>
              <li>
                <a href="https://bucketlistjourney.net/ideas-for-your-dog-bucket-list/">
                  Dog
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
