import React from "react";

import { shallow, mount } from "enzyme";
import Edit from "../Edit";

describe("Edit", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <Edit
        fields={{
          author: "Tolstoy, Leo",
          summary: "such a long book",
          title: "War and Peace"
        }}
        goBack={jest.fn()}
        submitUpdatedBook={jest.fn()}
        updateForm={jest.fn()}
        handleDelete={jest.fn()}
      />
    );
  });

  describe("initial render", () => {
    it("should display prop.fields.title", () => {
      const titleInput = wrapper.find("input").first();
      expect(wrapper.props().fields.title).toEqual(titleInput.instance().value);
    });

    it("should display prop.fields.author", () => {
      const authorInput = wrapper.find("input").at(1);
      expect(wrapper.props().fields.author).toEqual(
        authorInput.instance().value
      );
    });

    it("should display prop.fields.summary", () => {
      const summaryInput = wrapper.find("textarea");
      expect(wrapper.props().fields.summary).toEqual(
        summaryInput.instance().value
      );
    });
  });

  describe("editing book", () => {
    it("should update prop.fields.title on change", () => {
      const titleInput = wrapper.find("input").first();
      wrapper.props().fields.title = "title";
      titleInput.simulate("change");
      wrapper.mount();
      expect(wrapper.props().updateForm).toHaveBeenCalled();
      expect(titleInput.instance().value).toEqual("title");
    });

    it("should update prop.fields.author on change", () => {
      const authorInput = wrapper.find("input").at(1);
      wrapper.props().fields.author = "author";
      authorInput.simulate("change");
      wrapper.mount();
      expect(wrapper.props().updateForm).toHaveBeenCalled();
      expect(authorInput.instance().value).toEqual("author");
    });

    it("should update prop.fields.summary on change", () => {
      const summaryInput = wrapper.find("textarea");
      wrapper.props().fields.summary = "summary";
      summaryInput.simulate("change");
      wrapper.mount();
      expect(wrapper.props().updateForm).toHaveBeenCalled();
      expect(summaryInput.instance().value).toEqual("summary");
    });
  });

  describe("button tests", () => {
    it("submitUpdatedBook function should be called on button click", () => {
      const button = wrapper.find("button").at(0);
      button.simulate("click");
      expect(wrapper.props().submitUpdatedBook).toHaveBeenCalled();
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
