require "rails_helper"

RSpec.describe ReportController, type: :routing do
  
  describe "routing" do
    it "routes to #info" do
      expect(get: "/reports/info").to route_to("report#info")
    end
  end

end
