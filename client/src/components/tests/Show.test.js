import React from "react";

import { shallow, mount } from "enzyme";
import Show from "../Show";

describe("Show", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <Show
        fields={{
          author: "Tolstoy, Leo",
          summary: "such a long book",
          title: "War and Peace"
        }}
        goBack={jest.fn()}
        handleDelete={jest.fn()}
        showEditBookPath={jest.fn()}
        showDirectBook={jest.fn()}
      />
    );
  });

  describe("initial render", () => {
    it("should display prop.fields.title", () => {
      const title = wrapper.find("h5").props().children;
      expect(wrapper.props().fields.title).toEqual(title);
    });

    it("should display prop.fields.author", () => {
      const author = wrapper.find("h6").props().children;
      expect(wrapper.props().fields.author).toEqual(author);
    });

    it("should display prop.fields.summary", () => {
      const summary = wrapper.find("p").props().children;
      expect(wrapper.props().fields.summary).toEqual(summary);
    });
  });

  describe("button tests", () => {
    it("showEditBookPath function should be called on button click", () => {
      const button = wrapper.find("button").at(0);
      button.simulate("click");
      expect(wrapper.props().showEditBookPath).toHaveBeenCalled();
    });

    it("handleDelete function should be called on button click", () => {
      const button = wrapper.find("button").at(1);
      button.simulate("click");
      expect(wrapper.props().handleDelete).toHaveBeenCalled();
    });

    it("goBack function should be called on button click", () => {
      const button = wrapper.find("button").at(2);
      button.simulate("click");
      expect(wrapper.props().goBack).toHaveBeenCalled();
    });
  });
});
