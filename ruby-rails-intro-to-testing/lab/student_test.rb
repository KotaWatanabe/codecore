require "minitest/autorun"
require "./student.rb"

class StudentTest < MiniTest::Test

    def test_initialize_raises_error_when_augument_is_empty
        assert_raises do
          Student.new("james","bond")
        end
        assert_raises do
          Student.new()
        end
    end

    def test_full_name
        name = Student.new("james","bond",80)
        full_name = name.full_name
        assert_equal("james bond",full_name)
    end

    def test_grade
        new_score = Student.new("james","bond",95)
        grade = new_score.grade
        assert_equal("A", grade)
        assert_equal("F", Student.new("james","bond",30).grade)
    end
end