import React from 'react';
import Card from '../components/Card';
import SearchWidget from '../components/SearchWidget';

const Home = () => {
  return (
    <Card>
      <SearchWidget />
      <div className="table-area">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Fullname</th>
              <th>Owner</th>
              <th>Description</th>
              <th>Date Created</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>10270250</td>
              <td>facebook/react</td>
              <td>facebook</td>
              <td>
                A declarative, efficient, and flexible JavaScript library for
                building user interfaces.
              </td>
              <td>10 year ago</td>
              <td>
                <button className="button primary">View Contributors</button>
              </td>
            </tr>
            <tr>
              <td>10270250</td>
              <td>facebook/react</td>
              <td>facebook</td>
              <td>
                A declarative, efficient, and flexible JavaScript library for
                building user interfaces.
              </td>
              <td>10 year ago</td>
              <td>
                <button className="button primary">View Contributors</button>
              </td>
            </tr>
            <tr>
              <td>10270250</td>
              <td>facebook/react</td>
              <td>facebook</td>
              <td>
                A declarative, efficient, and flexible JavaScript library for
                building user interfaces.
              </td>
              <td>10 year ago</td>
              <td>
                <button className="button primary">View Contributors</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default Home;
