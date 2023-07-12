const Dashboard = () => {
    return (
        <div className="grid">
            <div className="col-12 lg:col-6 xl:col-3">
                <div className="card mb-0">
                    <div className="flex justify-content-between align-items-center">
                        <div>
                            <span className="block text-500 font-medium mb-3">Nepřečtené zprávy</span>
                            <div className="text-900 font-medium text-xl">152</div>
                        </div>
                        <div className="flex align-items-center justify-content-center bg-blue-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                            <i className="pi pi-inbox text-blue-500 text-xl" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
