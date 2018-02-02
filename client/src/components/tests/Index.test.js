import React from "react";

import { mount } from "enzyme";
import Index from "../Index";

describe("Create", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <Index
        books={[
          { author: "test1", title: "test1", summary: "test1" },
          { author: "test2", title: "test2", summary: "test2" }
        ]}
        showBookOnClick={jest.fn()}
      />
    );
  });

  describe("mapped data test", () => {
    it("renders mapped data correctly", () => {
      const h2 = wrapper.find("h2");
      const columns = wrapper.find(".col-md-4");
      const a = wrapper.find("a");
      expect(columns).toHaveLength(wrapper.props().books.length);
      expect(h2).toHaveLength(wrapper.props().books.length);
      expect(a).toHaveLength(wrapper.props().books.length);
      expect(h2.at(0).props().children).toEqual(wrapper.props().books[0].title);
      expect(h2.at(1).props().children).toEqual(wrapper.props().books[1].title);
    });
  });

  describe("button test", () => {
    it("showBookOnClick function should be called on button click", () => {
      const button = wrapper.find("a").at(1);
      button.simulate("click");
      expect(wrapper.props().showBookOnClick).toHaveBeenCalled();
    });
  });
});
