import React from 'react';
import Layout from '../../components/shared/Layout/Layout';
import { useSelector } from 'react-redux';

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <Layout>
      <div className="container">
        <div className="d-flex flex-column mt-4">
          <h1 className="text-primary">Welcome Admin <span className="text-success">{user?.role}</span></h1>
          <h3 className="text-dark">Manage Blood Bank App</h3>
          <hr />
          <p className="text-muted">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec justo nec urna tincidunt aliquet.
            Quisque sed consectetur ligula. Curabitur ultrices nulla ut dolor eleifend, a bibendum nisl faucibus.
            Vivamus id pharetra felis. Sed eget felis ut erat feugiat varius nec non odio. Nulla facilisi. Ut
            pellentesque quam sit amet augue feugiat, non convallis lacus vehicula.
            Quisque sed consectetur ligula. Curabitur ultrices nulla ut dolor eleifend, a bibendum nisl faucibus.
            Vivamus id pharetra felis. Sed eget felis ut erat feugiat varius nec non odio. Nulla facilisi.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;
